# 类型演算 :notes:

根据已知的信息，计算出新的类型

## typeof 关键字

TS中的`typeof`，书写的位置在类型约束的位置上。

表示：获取某个数据的类型

:::warning
TS中的`typeof`，与JS中的`typeof`不太一样，根据作用的位置区分
:::

```ts
const a: string = 'abc'

let b: typeof a = 'dasdas'
// 让b与a的类型保持一致
```

当`typeof`作用于类的时候，得到的类型，是该类的构造函数

```ts
class User {
    loginId: string
    loginPwd: string
}
// typeof User 计算出来的是User的构造函数，直接书写User表示的是类本身
function createUser(cls: typeof User): User {
    return new cls();
}
// 需要传递一个 构造函数 生成一个用户对象
const u = createUser(User);
```

## keyof 关键字

作用于类、接口、类型别名，用于获取其他类型中的所有成员名组成的联合类型

```ts
interface User {
    loginId: string
    loginPwd: string
    age: number
}
// prop的类型应该是User里某个字段中的一个
// 为什么要用 keyof User：将User类型里的所有成员名拿出来形成的联合类型，是动态的
// 如果你使用联合类型，如果User的属性名更改了，或者后续又增加或修改会导致这里引用prop出问题
function printUserProperty(obj: User, prop: keyof User) {
    console.log(obj[prop]);
}

const u: User = {
    loginId: 'Matt',
    loginPwd: '123145',
    age: 12,
}

printUserProperty(u, "age")
```


## in 关键字

该关键字往往和`keyof`联用，限制某个索引类型的取值范围

例：有一个如下的User类型

```ts
interface User {
    loginId: string
    age: number
    createDate: Date
}
```

如果你要通过`User`的所有属性来得到一个全新的，但是类型全部是string的类型可以使用`in`关键字

```ts
type UserString = {
    [p in "loginId" | "age" | "createDate"]: string
}

// 等同于 ⬇️
type UserString = {
    loginId: string
    age: string
    createDate: string
}

const u: UserString = {
    loginId: 'dandv',
    age: '123456',
    createDate: '2022-01-01'
}
```

但是这样做也不太好，如果后续对原`User`类型新增、修改或删除属性，你也不能通过`F2`一次性修改，会造成一些错误

于是可以利用`keyof`关键字，获取`User`类型里的所有类型

```ts
type UserString = {
    [p in keyof User]: string
}

// 等同于 ⬇️
type UserString = {
    loginId: string
    age: string
    createDate: string
}
```

也可以：新类型和原`User`类型的类型也保持一致

```ts
type newUser = {
    [p in keyof User]: User[p]
}

// 等同于 ⬇️
type newUser = {
    loginId: string
    age: number
    createDate: Date
}
```

也可以：属性全部只读

```ts
type UserReadonly = {
    readonly [p in keyof User]: User[p]
}

// 等同于 ⬇️
type UserReadonly = {
    readonly loginId: string
    readonly age: number
    readonly createDate: Date
}
```

也可以：属性全部可选

```ts
type UserPartial = {
    [p in keyof User]?: User[p]
}

// 等同于 ⬇️
type UserPartial = {
    loginId?: string
    age?: number
    createDate?: Date
}
```

也可以：属性全部可选 类型自定义

```ts
type MyPartial<T> = {
    [p in keyof T]?: T[p]
}
```

也可以：属性全部可选 类型自定义 属性全部只读

```ts
type MyReadonly<T> = {
    readonly [p in keyof T]?: T[p]
}
```

## TS中的预设的类型演算

|     类型演算       |           含义          |
| ----------------- | ---------------------- |
| `Partial<T>`      | 将类型T中的成员变为可选    |
| `Required<T>`     | 将类型T中的成员变为必填    |
| `Readonly<T>`     | 将类型T中的成员变为只读    |
| `Exclude<T, U>`   | 从T中剔除可以赋值给U的类型 |
| `Extract<T, U>`   | 提取T中可以赋值给U的类型   |
| `NonNullable<T>`  | 从T中剔除null和undefined |
| `ReturnType<T>`   | 获取函数返回值类型         |
| `InstanceType<T>` | 获取构造函数类型的实例类型  |

:::tip
`-?`标识符：去掉可选

`inter`关键字：推断
:::

```ts
interface User {
    name: string
    age: number
}

let u1: Partial<User> = {
    name: 'dadq',
}

let u2: Required<User> = {
    name: 'dadq',
    age: 0
}

let u3: Readonly<User> = {
    name: 'dadq',
    age: 0
}
```

```ts
type T = "男" | "女" | null | undefined

// 此时 NEWT 的类型为 "男" | "女" 的联合类型
let NEWT: Exclude<T, null | undefined> = "男"
```

```ts
type T = "男" | "女" | null | undefined

// 此时 NEWT 的类型为 "男" | "女" 的联合类型
let NEWT: Extract<T, "男" | "女" | "a"> = "男"
```

```ts
type str = string | null | undefined

// 此时 strNotEmpty 的类型为 string
type strNotEmpty = NonNullable<str>
```

```ts
// 情况1
type func = () => number

// 得到返回值为 number类型
type returnType = ReturnType<func>

// 情况2
function sum(a:number, b:number) {
    return a + b;
}
// 此时a的类型为 number类型
let a: ReturnType<typeof sum>
```

如下场景：有一个类型`twoParamsConstructor`来约束构造函数

```ts
class User{
    loginId: string
}
// 约束一个构造函数：必须满足这个条件：构造函数两个参数(鸭子辨型法：参数可以少)，返回User
type twoParamsConstructor = new (arg1: any, arg2: any) => User

let A: twoParamsConstructor = class Test extends User {
    constructor(a:any, b:any){
        super()
    }
}

// 此时 Inst 类型为 User
type Inst = InstanceType<twoParamsConstructor>
```
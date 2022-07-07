# 接口 :confetti_ball:

接口：`interface`

:::tip
TypeScript的接口：用于约束类、对象、函数的契约 (标准)

与类型别名一样，**接口不出现在编译结果中**
:::

契约 (标准) 的形式：

- API文档，弱标准
- 代码约束，强标准

## 接口约束对象

```ts
interface User {
    name: string
    age: number
    sayHello(): void// 函数类型写法一
}

type User2 = {
    name: string
    age: number
    sayHello: () => void// 函数类型写法二
}

let u: User = {
    name: "Matt",
    age: 18,
    sayHello(){
        console.log('hello')
    }
}
```

## 接口约束函数

```ts
type Condition1 = (n: number) => boolean
type Condition2 = {// 定界符
    (n: number): boolean
}
interface Condition {
    (n: number): boolean
}
function sum(numbers: number[], callback: Condition) {
    let s = 0;
    numbers.forEach(n => {
        if(callback(n)){
            s += n;
        }
    })
    return s;
}

const result = sum([3, 4, 5, 7, 11], n => n % 2 !== 0);
console.log(result);// 26
```

## 接口可以继承

可以通过接口之间的继承，实现多种接口的组合

:::tip
使用类型别名可以实现类似的组合效果，需要通过`&`，它叫做**交叉类型**

它们的区别：
- 子接口不能覆盖父接口的成员
- 交叉类型会把相同成员的类型进行交叉
:::

```ts
// 使用接口
interface A {
    T1: string
}

interface B {
    T2: number
}

interface C extends A, B {
    T3: boolean
}

let u: C = {
    T1: '123',
    T2: 123,
    T3: true
}
```

```ts
// 使用类型别名
type A = {
    T1: string
}

type B = {
    T2: number
}

type C = {
    T3: boolean
} & A & B

let u: C = {
    T1: '123',
    T2: 123,
    T3: true
}
```

## readonly

只读修饰符，修饰的目标是只读的。**不在编译结果中**

```ts
interface User {
    readonly id: string
    name: string
    age: number
}

let u: User = {// 只有初始化的时候可以赋值，后续只读
    id: "0001",
    name: "Matt",
    age: 18
}
```

```ts
const arr: readonly number[] = [3, 4, 6];
const arr2: ReadonlyArray<number> = [3, 4, 6];

arr[0] = 3;// 不能赋值
arr.push();// 现在arr没有push方法
arr2[1] = 'A';// 不能赋值
arr2.slice(1);// 现在arr2没有slice方法
```

如果是这种情况

```ts
interface User {
    readonly id: string
    name: string
    age: number
    readonly arr: string[]
}

let u: User = {// 只有初始化的时候可以赋值，后续只读
    id: "0001",
    name: "Matt",
    age: 18,
    arr: ['A', 'B', 'C']
}

u.arr[0] = 'a';// 不能赋值
u.arr.push("D");// 但是可以使用push
```

如果既希望数组不能赋值，也希望数组的每一项不能改变应该如下

```ts
interface User {
    readonly id: string
    name: string
    age: number
    readonly arr: readonly string[]
}
```
# 类型别名 type :earth_americas:

在一个系统中，可能会遇到多处位置使用到这个用户的类型，如下，变量`user`和函数`getUsers`返回值

```ts
let user: {
    name: string,
    age: number,
    gender: "男" ｜ "女"
}

function getUsers(): {
    name: string,
    age: number,
    gender: "男" ｜ "女"
}[] {
    return [];
}
```

把这个类型提出来形成一个名称，这个名称就是**类型别名** (对已知的一些类型定义名称)

```ts
type 类型名 = ...
```

类型别名里也可以使用其他类型别名

```ts
type Gender = "男" ｜ "女";

type User = {
    name: string,
    age: number,
    gender: Gender
}

let user: User;

function getUsers(g: Gender): User[]{
    return [];
}
```
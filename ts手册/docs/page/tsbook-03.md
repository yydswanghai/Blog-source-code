# 其他常用类型 :rainbow:

## 扩展类型

1. 类型别名
2. 枚举
3. 接口
4. 类

## 联合类型

联合类型: 多种类型任选其一

配合**类型保护**进行判断

## 类型保护

当对某个变量进行类型判断之后，在判断的语句块中便可以确定它的确切类型。`typeof`可以触发类型保护。

```ts
// name是一个联合类型，可以是字符串也可以是undefined
let name: string | undefined;

if(typeof name === "string"){
    // 类型保护
    name.
}
```

## void类型

通常用于约束函数的返回值，表示该函数没有返回值

```ts
function print():void {
    console.log('Matt');
}
```

## never类型

通常用于约束函数的返回值，表示该函数永远不可能结束

```ts
// 该函数永远不会结束
function throwError(msg:string):never {
    throw new Error(msg);
    console.log(abc);
}

function alwaysDoSomething():never {
    while(true){
        // ...
    }
}
```

## 字面量类型

使用一个值进行约束

```ts
let gender: "男" | "女";// gender只能取值'男'/'女'
let arr: [];// arr只能取值为一个空数组
let user: {// user必须取值为一个对象，且对象里必须有一个string类型的name和number类型的age
    name: string,
    age: number,
}
```

## 元祖类型 (Tuple)

一个固定长度的数组，并且数组中的每一项的类型确定

```ts
let tu: [string, number];// 数组必须有且只有两项，第一项必须为string，第二项必须为number
```

## any类型

any类型可以绕过类型检查，因此any类型的数据可以赋值给任意类型

```ts
let data:any = "Matt";

let num:number = data;
```
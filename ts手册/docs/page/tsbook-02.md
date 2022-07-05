# 基本类型检查 :100:

TS是一个**可选**的静态的类型系统

### 如何进行类型约束?

**仅需要在变量、函数的参数、函数的返回值的位置加上 `: 类型`**

```ts
function sum(a: number, b: number): number{
    return a + b;
}

let num: number = sum(3, 4);
```

:::tip
小技巧：当我们想改`sum`这个函数名的时候，可以双击选中函数名，然后按`F2`或右键`重命名符号`，然后在输入框里修改为`add`，此时，所有的`sum`名都被同步修改为了`add`。因为ts里有严格的类型检查，他们之间是有联系的。

不仅如此，如果在其他的文件里调用了这个`sum`如果不知道这个`sum`函数写的啥可以双击选中函数，然后按`F12`或右键`转到定义`，它就会跳到函数`sum`所在定义的位置。
:::

## 类型推导

ts在很多场景中可以自动完成**类型推导**

```ts
function sum(a: number, b: number){
    return a + b;
}

let num = sum(3, 4);// 推导成功 sum返回值为number类型，所以变量num也是number类型

let name = 'kevin';// 推导成功 name为string类型
```

### 什么时候能推导成功？

```ts
let age;// 没有推导成功，此处类型为any类型，并且age左下角有三个小点，表示警告
```

:::warning
`any`：表示任意类型，对该类型，ts不进行类型检查
:::

:::tip
小技巧，如何区分数字字符串和数字，关键看怎么读？
:::

```ts
let phone:number = 13344445555;// 读作1百3十3亿4千4百4十4万5千5百5十5
// 而正常手机号都是读 13344445555a 所以这里是字符串
let phone = '13344445555';// 所以这里phone被推导的类型应为string
```

## 源代码和编译结果的差异

```ts
function add(a: number, b: number){
    return a + b;
}

let num = add(3, 4);
let name = 'kevin';
let phone = '13344445555'
```

tsc编译后

```js
function add(a, b) {
    return a + b;
}
let num = add(3, 4);
let name = 'kevin';
let phone = '13344445555';
```

:::warning
编译结果中没有类型约束信息
:::

## 基本类型

| 类型关键字 | 类型 |
| -------- | ---- |
|  number  | 数字 |
|  string  | 字符串 |
|  boolean | 布尔 |
| 下面例子 | 数组 |
|  object  | 对象 |
| null和undefined |  |

```ts
let nums: number[] = [2, 3, 4];// 数字类型的数组，数组的每一项只能为number类型
let nums = [2, 3, 4];// 可以简写，因为ts会类型推导

let nums: Array<number> = [2, 3, 4];
```

`null`和`undefined`是所有其他类型的子类型，它可以赋值给其他类型。

你可以在`tsconfig.json`配置文件里加上如下配置，表示更加严格的空类型检查，这样就不能将`null`或`undefined`赋值给其他类型了。

```json
// tsconfig.json
{
    "compilerOptions": {
       "strictNullChecks": true
    }
}
```

```ts
let n:string = undefined;
```

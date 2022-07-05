# 泛型 :gift:

有时，书写某个函数时，会丢失一些类型信息（多个位置的类型应该保持一致或有关联的信息）

:::tip
**泛型**：是指附属于函数、类、接口、类型别名之上的类型

泛型相当于是一个**类型变量**，在定义时，无法预先知道具体的类型，可以用该变量来代替，只有到调用时，才能确定它的类型
:::

很多时候，TS会智能的根据传递的参数，推导出泛型的具体类型

如果无法完成推导，并且又没有传递具体的类型，默认为空对象

:::warning
泛型可以设置默认值
:::

```ts
function take(arr: any[], n: number): any[] {
    if(n >= arr.length){
        return arr;
    }
    const newArr: any[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const arr = take(['foo', 'baz', 'bar'], 2);
```

在这个例子里，参数`arr`、返回值和`newArr`这三个`any[]`按逻辑来讲应该属于一致的，是同一个东西。比如我传递到是一个字符串数组，那么返回到应该也是一个字符串数组，但是现在返回到是`any`数组。

## 在函数中使用泛型

在函数名之后写上`<泛型名称>`

```ts
// 取一个数组的<什么类型:T>的前几项，T表示一个类型
function take<T = number>(arr: T[], n: number): T[] {
    if(n >= arr.length){
        return arr;
    }
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// take<string> 告诉函数你现在操作的类型是一个字符串类型
const arr = take<string>(['foo', 'baz', 'bar'], 2);// arr => string[]
// take<number> 告诉函数你现在操作的类型是一个数字类型
const arr2 = take<number>([15, 21, 39], 2);// arr2 => number[]
// 也可以省略，ts会推导出这里为一个布尔类型
const arr3 = take([true, false, false], 2);// arr3 => boolean[]
// 默认为number
const arr4 = take([15, 21, 39], 2);// arr4 => number[]
```

## 在类型别名、接口、类中使用泛型

直接在名称后写上`<泛型名称>`

```ts
// 回调函数：判断数组中的某一项时候满足条件
type Condition<T> = (n: T, i: number) => boolean
interface Condition2<T> {
    (n: T, i: number): boolean
}

function filter<T>(arr: T[], callback: Condition<T>): T[] {
    const newArr: T[] = [];
    arr.forEach((n, i) => {
        if(callback(n, i)){
            newArr.push(n);
        }
    })
    return newArr;
}

const arr = [3, 4, 5, 6, 8];

console.log(filter(arr, n => n % 2 !== 0));// [3, 5]
```

在类中使用泛型

```ts
export class ArrayHelper<T> {

    constructor(private arr: T[]){}

    take(n: number): T[] {
        if(n >= this.arr.length){
            return this.arr;
        }
        const newArr: T[] = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i]);
        }
        return newArr;
    }

    shuffle(){
        for (let i = 0; i < this.arr.length; i++) {
            const targetIndex = this.getRandom(0, this.arr.length);
            [this.arr[targetIndex], this.arr[i]] = 
            [this.arr[i], this.arr[targetIndex]];
        }
    }

    private getRandom(min:number, max:number){
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }
}

const arr = new ArrayHelper<number>([1,2,3]);// arr => number[]
const arr2 = new ArrayHelper(["foo", "bar", "baz"])// arr2 => string[]
```

## 泛型约束

泛型约束，用于限制泛型的取值

为了确保`nameToUpperCase`函数里的参数`obj`有`name`属性，我们需要使用`hasNameProperty`来对泛型进行约束，保障该泛型一定是有`name`属性

```ts
interface hasNameProperty {
    name: string
}

// 将某个对象的name属性的每个单词的首字母大写，然后将该对象返回
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
    obj.name = obj.name
        .split(" ")
        .map(it => it[0].toUpperCase() + it.substring(1))
        .join("");
    return obj;
}

const o = {
    name: "Kevin yuan",
    age: 22,
    gender: "男"
}

const newO = nameToUpperCase(o);
```

## 多泛型

```ts
// 将两个数组进行混合 [1,2,3] + ["a", "b", "c"] = [1, "a", 2, "b", 3, "c"]
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
    if(arr1.length != arr2.length){
        throw new Error("两个数组长度不等");
    }
    let result: (T | K)[] = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}

mixinArray([1,2,3], ["a", "b", "c"]);// [ 1, 'a', 2, 'b', 3, 'c' ]
```
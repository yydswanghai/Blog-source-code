# 类型兼容性 :dart:

若将 B 赋值 A，如果能完成赋值，则 B 和 A类型兼容

鸭子辨型法 (子结构辨型法)：目标类型需要某一些特征，赋值的类型只要能满足该特征即可

1. **基本类型**：完全匹配
2. **对象类型**：鸭子辨型法，当直接使用对象字面量赋值的时候，会进行更加严格的判断

### 类型断言

告诉TS当前数据是什么类型

```ts
数据 as 类型
```

### 非空断言

在数据之后加上一个`!`，告诉TS，不用考虑该数据为空的情况

```ts
interface Duck {
    sound: "嘎嘎嘎"
    swin(): void
}

let person = {
    name: "伪装成鸭子的人",
    age: 18,
    sound: "嘎嘎嘎" as "嘎嘎嘎",
    //   数据"嘎嘎嘎" 断言 类型"嘎嘎嘎"
    swin(){
        console.log(this.name + "正在游泳，并发出了" + this.sound)
    }
}

// person 可以赋值给 Duck类型，而且 duck 里只有 sound 属性和 swin 方法
let duck: Duck = person;

// 如果你使用对象字面量直接赋值会报错，因为这里你明确的知道是Duck的类型
let duck2: Duck = {
    name: "伪装成鸭子的人",
    age: 18,
    sound: "嘎嘎嘎" as "嘎嘎嘎",
    //   数据"嘎嘎嘎" 断言 类型"嘎嘎嘎"
    swin(){
        console.log(this.name + "正在游泳，并发出了" + this.sound)
    }
}
```

3. **函数类型**

**参数**：传递给目标函数的参数可以少，但不可以多
**返回值**：要求返回必须返回；不要求返回，你随意

```ts
interface Condition {
    (n: number, i: number): boolean
}

function sum(numbers: number[], callback: Condition) {
    let s = 0;
    numbers.forEach((n, i) => {
        if(callback(n, i)){
            s += n;
        }
    })
    return s;
}
// 1.不需要i的时候
const result = sum([3, 4, 5, 7, 11], n => n % 2 !== 0);
// 2.需要i得时候
const result2 = sum([3, 4, 5, 7, 11], (n, i) => i % 2 !== 0);
```
# 函数相关的约束 :dizzy:

## 函数重载

在函数实现之前，对函数调用的多种情况进行声明

```ts
/**
 * @param {number} a
 * @param {number} b
 * @return {number} 得到a*b
 */
function conbine(a:number, b:number):number;
/**
 * @param {string} a
 * @param {string} b
 * @return {string} 得到a+b拼接的结果
 */
function conbine(a:string, b:string):string;
function conbine(a: number|string, b: number|string): number|string {
    if(typeof a === 'number' && typeof b === 'number'){
        return a * b;
    }
    else if(typeof a === 'string' && typeof b === 'string'){
        return a + b;
    }
    throw new Error("a和b类型必须是相同的")
}

const result = conbine(3, 3);
const result2 = conbine('1', '2');
```

## 可选参数

可以在某些参数名后加上问号，表示该参数可以不用传递

```ts
function sum(a: number, b: number, c?: number) {
    if(c){
        return a + b + c
    }else{
        return a + b
    }
}

sum(3, 4);
sum(3, 4, 5);
```

:::warning
可选参数必须在参数列表的末尾，假如第一个参数可选，那你每次调用`sum`依然还是需要传递三个参数，这样可选就没有任何意义了。
:::
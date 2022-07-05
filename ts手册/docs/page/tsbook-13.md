# 装饰器 :framed_picture:

装饰器 (decorator)

面向对象的概念 (java：注解，C#：特征)

目前js支持装饰器

## 解决的问题

装饰器，能够带来额外的信息量，可以达到分离关注点的目的

- 信息书写位置的问题
- 重复代码的问题

上述两个问题产生的根源：某些信息在定义时，能够附加的信息量有限

装饰器的作用：为某些属性、类、参数、方法提供元数据信息 (metadata)

元数据：描述数据的数据，类比html里的`<meta>`标签

## 装饰器的本质

在js中，装饰器是一个函数。(装饰器是要参与运行的)

装饰器可以修饰：
- 类
- 成员（属性、方法）
- 参数

## 类装饰器

:::tip
类装饰器的本质是一个函数，该函数接收一个参数，表示类本身 (构造函数本身)
:::

使用装饰器：

```ts
@得到一个函数
```

### 在TS中，如何约束一个变量为类？

1. `Function`
2. `new (参数) => object`

在TS中要使用装饰器，要在`tsconfig.json`配置如下：

```json
// tsconfig.json
{
    "compilerOptions": {
       "experimentalDecorators": true
    }
}
```

装饰器函数的运行时间：在类定义后直接运行 (可以自行查看tsc编译后的js会发现，在类定义下面会运行一个**装饰器的函数**)

```ts
// 这里target 约束为一个无参的类构造函数
function test(target: new () => object) {
    console.log(target);// [class User]
}

@test
class User {

}
```

### 类装饰器可以具有的返回值

1. void：仅运行函数
2. 返回一个新的类：会将新的类替换掉装饰目标

:::tip
小技巧：`new () => object`使用剩余参数
:::

```ts
function test(target: new (...args: any[]) => object) {
    console.log(target)
}

@test
class A {
    constructor(
        public name: string,
        public age: number
    ){}
}
```

:::warning
多个装饰器组合：会按照后加入先调用的顺序进行调用。
:::

```ts
type constructor = new (...args: any[]) => object
function d1(target: constructor) {
    console.log('d1')
}
function d2(target: constructor) {
    console.log('d2')
}

@d2
@d1
class A {

}

// 输出
// => d1
// => d2
```

先运行函数从上至下d2()、d1()，得到两个装饰器，然后运行装饰器

```ts
type constructor = new (...args: any[]) => object
function d1() {
    console.log('d1')
    return function (target: constructor) {
        console.log('d1 decorator')
    }
}
function d2() {
    console.log('d2')
    return function (target: constructor) {
        console.log('d2 decorator')
    }
}

@d2()
@d1()
class A {

}

// 输出
// => d2
// => d1
// => d1 decorator
// => d2 decorator
```



## 成员装饰器

### 属性

:::tip
属性装饰器也是一个函数，该函数需要两个参数：

1. 如果是静态属性，则为类本身，如果是实例属性，则为类的原型
2. 固定为一个字符串，表示属性名
:::

```ts
function d(target:any, key: string) {
    console.log(target, target === A.prototype, key)
}
// 测试记得注释 "strictNullChecks": true
class A {
    @d
    prop1: string

    @d
    prop2: string

    @d
    static prop3: string
}
// {} true 'prop1'
// {} true 'prop2'
// [class A] false 'prop3'
```

### 方法

:::tip
方法装饰器也是一个函数，该函数需要三个参数：

1. 如果是静态方法，则为类本身，如果是实例方法，则为类的原型
2. 固定为一个字符串，表示方法名
3. 属性描述对象
:::

```ts
function d(target:any, key: string, descriptor: PropertyDescriptor) {
    console.log(target, key, descriptor)
}

class A {
    @d
    method1(){

    }
}
// {} 'method1' {
//      value: [Function: method1],
//      writable: true,
//      enumerable: false,
//      configurable: true
// }
```

同一个位置上可以使用多个装饰器

```ts
function enumrable(target:any, key: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = true;// 让方法可以被遍历
}
function useless(target:any, key: string, descriptor: PropertyDescriptor) {
    descriptor.value = function() {
        console.warn(key + "该方法已过期");
    }
}

class A {
    @enumrable
    @useless
    method1(){
        console.log('method1')
    }

    @enumrable
    method2(){

    }
}

const a = new A();
for (const key in a) {
    console.log(key)// method1 method2
}
a.method1();// method1该方法已过期
```

## 常用第三方库

### reflect-metadata

该库的作用：保存元数据

### class-validator

该库的作用：类验证

### class-transformer

该库的作用：将平面对象转换成类

## 参数装饰器

:::tip
参数装饰器：需要在 依赖注入 (依赖倒置) 下才能发挥作用

要求函数有三个参数：

1. 如果方法是静态的，则为类本身；如果方法是实例方法，则为类的原型
2. 方法名称
3. 在参数列表中的索引
:::

```ts
function test(target: any, method: string, index: number) {
    console.log(target, method, index);// {} sum 1
}

class MyMath {
    sum(a: number, @test b: number){
        return a + b;
    }
}
```

## TS自动注入的元数据

如果安装了`reflect-metadata`，并且导入了该库，并且在某个成员上添加了元数据，并且启用了如下`tsconfig.json`配置(生成装饰器的元数据)配置。

```json
// tsconfig.json
{
    "compilerOptions": {
       "emitDecoratorMetadata": true
    }
}
```

则TS在编译结果中，会将约束的类型，作为元数据加入到对应的位置，这样一来，TS的类型检查 (约束) 将有机会在**运行时**进行

```ts
import "reflect-metadata"

class User {
    @Reflect.metadata("a", "b")
    loginId: string

    @Reflect.metadata("a", "b")
    age: number
}
```
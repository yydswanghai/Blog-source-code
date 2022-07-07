# 面向对象 :video_game:

## 为什么要学面向对象?

1. TS为前端面向对象开发带来了契机

JS语言没有类型检查，如果使用面向对象的方式开发，会产生大量的接口，而大量的接口会导致调用复杂度剧增，这种复杂度必须通过严格的类型检查来避免错误，尽管可以使用注释或文档或记忆力，但是它们没有强约束力。

TS带来了完整的类型系统，因此开发复杂程序时，无论接口数量有多少，都可以获得完整的类型检查，并且这种检查是具有强约束力的。

2. 面向对象中有许多非常成熟的模式，能处理复杂问题

在过去的很多年中，在大型应用或复杂领域，面向对象已经积累了非常多的经验。

### 什么是面向对象?

面向对象：Oriented (基于) Object (事物)，简称OO。

**是一种编程思想，它提出一切以类为切入点思考问题。**

其他编程思想：面向过程、函数式编程

- 面向过程：以功能流程为思考切入点，不太适合大型应用
- 函数式编程：以数学运算为思考切入点
- 面向对象：以划分类为思考切入点

类：可以产生对象的模版

## 类的继承

### 继承的作用

:::tip
**继承可以描述类与类之间的关系**

如果A和B都是类，并且可以描述为A是B，则A和B形成继承关系：

- B是父类，A是子类
- B派生A，A继承自B
- B是A的基类，A是B的派生类

如果A继承自B，则A中自动拥有B中的所有成员
:::

- 例如：坦克、玩家坦克、敌方坦克

- 玩家坦克是坦克，敌方坦克是坦克

### 成员的重写

:::tip
**重写(override)**：子类中覆盖父类的成员

无论是属性还是方法，子类都可以对父类的相应成员进行重写，但是重写时，需要保证类型的匹配。因为**子类成员不能改变父类成员的类型**

**super关键字**：在子类的方法中，可以使用super关键字读取父类成员
:::

:::warning
this关键字：在继承关系中，this的指向是动态 —— 调用方法时，根据具体的调用者确定this指向
:::

```ts
export class Tank {
    x: number = 0
    y: number = 0
    name: string = "坦克"
    shoot(){
        console.log("发射子弹")
    }
    sayHello(){
        console.log(`我是一个${this.name}`)
    }
}
export class PlayerTank extends Tank {
    x: number = 20
    y: number = 20
    name: string = "玩家坦克"
    shoot(){
        console.log("玩家坦克发射子弹")
    }
    sayHello(){
        console.log("啦啦啦")
    }
    test(){
        super.sayHello();// 调用父类的方法
        this.sayHello();// 因为重写了 sayHello 所以this调用的是自己的方法
    }
}
export class EnemyTank extends Tank {
    name: string = "敌方坦克"
}

const p = new PlayerTank();
console.log(p.x, p.y);// 20 20
p.shoot();// 玩家坦克发射子弹
p.sayHello();// 我是一个玩家坦克
p.test();
// 我是一个玩家坦克
// 啦啦啦
```

### 类型匹配

:::tip
鸭子辨型法

子类的对象，始终可以赋值给父类

面向对象中，这种现象，叫做**里氏替换原则**

如果需要判断一个数据的具体子类类型，可以使用`instanceof`
:::

```ts
export class Tank {

}

export class PlayerTank extends Tank {
    life: number = 5
}

export class EnemyTank extends Tank {

}

let p: Tank = new PlayerTank();// PlayerTank类型可以赋值给Tank类型，p的真实值为PlayerTank类型

// p.life
// 这里使用不了，因为现在p的类型是Tank，因为ts不能确定p一定是 PlayerTank 类型
// 可以你后面还会给p重新赋值为其他类型比如`p = new EnemyTank();`

if(p instanceof PlayerTank){// 触发类型保护，在if内确定了p为PlayerTank类型
    console.log(p.life);// 5
}

```

### protected修饰符

| 修饰符     | 含义                                         |
| --------- | ------------------------------------------- |
| readonly  | 只读修饰符                                    |
| **访问权限修饰符** | **含义**                               |
| public    | 默认的访问修饰符，公开的，所有的代码均可访问        |
| private   | 私有的，只有在类中可以访问                       |
| protected | 受保护的成员，只能在自身和子类中访问               |

### 单根性和传递性

:::tip
**单根性**：每个类最多只能拥有一个父类

**传递性**：如果A是B的父类，并且B是C的父类，则可以认为A也是C的父类
:::

```ts
export class Tank {
    name: string = "坦克"
    shoot(){
        console.log("发射子弹")
    }
}
export class PlayerTank extends Tank {
    name: string = "玩家坦克"
    shoot(){
        console.log("玩家坦克发射子弹")
    }
}
export class EnemyTank extends Tank {
    health: number = 1
}

export class BossTank extends EnemyTank {
    // 即拥有 EnemyTank 类的全部成员 也拥有 Tank类的全部成员
}

const b = new BossTank();
```

## 抽象类

### 为什么需要抽象类?

:::tip
有时，某个类只表示一个抽象概念，主要用于提取子类共有的成员，而不能直接创建它的对象。该类可以作为抽象类。
:::

```ts
abstract class Chess {}
```

### 抽象成员

:::tip
父类中，可能知道有些成员是必须存在的，但是不知道该成员的值或实现是什么，因此，需要有一种强约束，让继承该类的子类，必须要实现该成员。

**抽象类中**，可以有抽象成员，这些抽象成员必须在子类中实现
:::

### 设计模式 - 模板模式

**设计模式**：对面一些常见的功能场景，有一些固定的、经过多年实践的成熟方法，这些方法称之为设计模式。

:::tip
**模板模式**：有些方法，所有的子类实现的流程完全一致，只是流程中的某个步骤的具体实现不一致，可以将该方法提取到父类，在父类中完成整个流程的实现，遇到实现不一致的方法时，将该方法做成抽象方法。
:::

```ts
abstract class Chess {
    x: number = 0
    y: number = 0
    // 棋子名
    abstract readonly name: string
    // 棋子移动规则
    move(targetX:number, targetY:number): boolean {
        console.log('1. 边界判断')
        console.log('2. 目标位置是否有己方棋子')
        // 3. 棋子移动规则判断
        if(this.rule(targetX, targetY)){
            this.x = targetX;
            this.y = targetY;
            console.log(`${this.name}移动成功`);
            return true;
        }
        return false;
    }
    protected abstract rule(targetX:number, targetY:number): boolean
}

class Horse extends Chess {
    // 方式一
    readonly name: string = '马'
    protected rule(targetX: number, targetY: number): boolean {
        return true;
    }
}

class Cannon extends Chess {
    // 方式二
    readonly name: string
    constructor(){
        super();
        this.name = '炮';
    }
    protected rule(targetX: number, targetY: number): boolean {
        return false;
    }
}

class Soldier extends Chess {
    // 方式三：没有写set就不能更改了
    get name(){
        return '兵';
    }
    protected rule(targetX: number, targetY: number): boolean {
        return true;
    }
}

const h = new Horse();
const c = new Cannon();
const s = new Soldier();
// const ch = new Chess();// 无法创建抽象类的实例
h.move(1,2)
c.move(3,4)
s.move(5,6)
```

## 静态成员

:::tip
**静态成员**是指，附着在类上的成员 (属于某个构造函数的成员)

使用`static`修饰的成员，是静态成员

**实例成员**：对象成员，属于某个类的对象

**静态成员**：非实例成员，属于某个类
:::

```ts
class User {
    static users: User[] = [];

    constructor(
        public loginId:string,
        public loginPwd: string,
        public name: string,
        public age: number,
    ){
        // 需要将新建的用户加入到数组中
        // this就是当前新创建的对象
        User.users.push(this);
    }

    sayHello(){
        console.log(`I am ${this.name}, my age is ${this.age}`)
    }
    // 静态方法login中的this指向 User
    static login(loginId:string, loginPwd: string): User | undefined{
        return this.users.find(u => u.loginId === loginId && u.loginPwd === loginPwd)
    }
}

const u1 = new User('u1', '123', '王富贵', 11);
const u2 = new User('u2', '123', '坤坤', 18);
const u3 = new User('u3', '123', '老六', 22);

const result = User.login('u2', '123');
if(result){
    result.sayHello();// I am 坤坤, my age is 18
}else{
    console.log('登录失败，账号或密码错误')
}
```

### 静态方法中的this

:::tip
* 实例方法中的this指向的是**当前对象**
* 而静态方法中的this指向的是**当前类**
:::

### 设计模式 - 单例模式

:::tip
**单例模式**：某些类的对象，在系统中最多只能有一个，为了避免开发者造成随意创建多个类对象的错误，可以使用单例模式进行强约束。
:::

```ts
class Board {
    width: number = 500
    height: number = 700

    init(){
        console.log("初始化棋盘")
    }
    // 构造函数私有化就不能用new了
    private constructor(){}
    // 唯一棋盘对象
    private static _board?: Board
    // 创建
    static createBoard(): Board {
        if(this._board){
            return this._board;
        }
        this._board = new Board();
        return this._board;
    }
}

const b = Board.createBoard()
const c = Board.createBoard()
console.log(b === c);// true
```

## 再谈接口

:::tip
接口用于约束类、对象、函数的契约 (标准)

面向对象领域中的接口的语义：表达了某个类是否拥有某种能力

某个类具有某种能力，其实就是实现了某种接口
:::


不使用接口实现时：

- 对能力 (成员函数) 没有强约束力
- 容易将类型和能力耦合在一起

系统中缺少对能力的定义 -> 接口

### 类型保护函数

:::tip
通过调用该函数，会触发TS的类型保护，该函数必须返回`boolea`

接口和类型别名的最大区别：接口可以被类实现，而类型别名不可以
:::

例子：有一个马戏团，马戏团中有很多动物，包括：狮子、老虎、猴子、狗，这些动物都具有共同的特征：名字、年龄、种类名称，还包含一个共同的方法：打招呼，它们各自有各自的技能，技能是可以通过训练改变的。狮子和老虎能进行火圈表演，猴子能进行平衡表演，狗能进行智慧表演。

马戏团中有以下常见技能：

- 火圈表演：单火圈、双火圈
- 平衡表演：独木桥、走钢丝
- 智慧表演：算术题、跳舞

```ts
abstract class Animal {
    abstract type: string

    constructor(
        public name: string,
        public age: number,
    ){}

    sayHello(){
        console.log(`
        各位观众，大家好！
        我是${this.type}，
        我叫${this.name}，
        今年${this.age}岁`)
    }
}
// 能力
interface IFireShow {
    singleFire(): void
    doubleFire() :void
}

interface IBalanceShow {
    singlePlankBridge(): void
    wireWalking(): void
}

interface IWisdomShow {
    doArithmetic(): void
    dance(): void
}

class Lion extends Animal implements IFireShow {
    type: string = "狮子"

    singleFire(){
        console.log(`${this.name}表演单火圈`)
    }
    doubleFire(){
        console.log(`${this.name}表演双火圈`)
    }
}

class Tiger extends Animal implements IFireShow {
    type: string = "老虎"

    singleFire(){
        console.log(`${this.name}表演单火圈`)
    }
    doubleFire(){
        console.log(`${this.name}表演双火圈`)
    }
}

class Monkey extends Animal implements IBalanceShow, IFireShow {
    type: string = "猴子"

    singlePlankBridge(){
        console.log(`${this.name}表演走独木桥`)
    }
    wireWalking(){
        console.log(`${this.name}表演走钢丝`)
    }
    singleFire(){
        console.log(`${this.name}表演单火圈`)
    }
    doubleFire(){
        console.log(`${this.name}表演双火圈`)
    }
}

class Dog extends Animal implements IWisdomShow {
    type: string = "狗"

    doArithmetic(){
        console.log(`${this.name}表演做算术题`)
    }
    dance(){
        console.log(`${this.name}表演跳舞`)
    }
}

const animals: Animal[] = [
    new Lion("王富贵", 5),
    new Tiger("坤坤", 4),
    new Monkey("老六", 7),
    new Dog("汪汪", 3)
]
// 1. 让所有动物打招呼
animals.forEach(a => a.sayHello());

// 2. 所有会火圈表演的动物，完成火圈表演

// 类型保护函数：帮助ts判断 ani是否具有某种能力(IFireShow)
function hasFireShow(ani: object): ani is IFireShow {
    // 因为ts不支持这样判断 `ani(对象) instanceof IFireShow(接口在运行时不存在)`
    if(
        (ani as IFireShow).singleFire  && (ani as IFireShow).doubleFire
    ){
        return true;
    }
    return false;
}
animals.forEach(a => {
    // 判断当前对象是否有某种能力
    if(hasFireShow(a)){
        a.singleFire();
        a.doubleFire();
    }
});

// 3. 所有会智慧表演的动物，完成智慧表演

function hasWisdomShow(ani: object): ani is IWisdomShow {
    if(
        (ani as IWisdomShow).doArithmetic  && (ani as IWisdomShow).dance
    ){
        return true;
    }
    return false;
}
animals.forEach(a => {
    if(hasWisdomShow(a)){
        a.doArithmetic();
        a.dance();
    }
});
```

#### 接口可以继承类

表示该类的所有成员都在接口中

```ts
class A {
    a1: string = ''
    a2: string = ''
    a3: string = ''
}

class B {
    b1: number = 0
    b2: number = 0
    b3: number = 0
}

interface C extends A, B { }

const c: C = { a1: '', a2: '', a3: '', b1: 0, b2: 0, b3: 0 }
```

## 索引器

以前在js里叫这个为**成员表达式**

```ts
对象[值]
```

在TS中，默认情况下，不对索引器 (成员表达式) 做严格的类型检查

```ts
class User {
    constructor(
        public name: string,
        public age: number
    ){}
}

const u = new User("", 12);
console.log(u['pid']);
console.log(u.pid);
```

这里不做严格的类型检查是因为ts不确定你这里算出来的值是多少，可能你这个`u[]`里面的结果来源于某个表达式或函数调用结果。

而`u.pid`调用的时候有严格的类型检查是因为，这里ts认为你是确定你一定要读`pid`这个属性。

`tsconfig.json`配置开启对隐式any的检查

隐式any：TS根据实际情况推导出的any类型

```json
// tsconfig.json
{
    "compilerOptions": {
       "noImplicitAny": true
    }
}
```

:::warning
在索引器中，键的类型可以是字符串，也可以是数字

在类中，索引器书写的位置应该是所有成员之前
:::

```ts
class User {
    [prop:string]: any

    constructor(
        public name: string,
        public age: number
    ){}
}

const u = new User("", 12)
console.log(u['pid']);// 严格检查下，添加索引器就不在报错了

class MyArray {
    [index:number]: string

    0 = '1'
    1 = 'adds'
    2 = 'Beqwt'
}

const my = new MyArray();
my[5] = "5555"
```

:::tip
**TS中索引器的作用**

1. 在严格的检查下，可以实现为类动态增加成员
2. 可以实现动态的操作类成员

在JS中，所有的成员名本质上，都是字符串，如果使用数字作为成员名，会自动转换为字符串

可以加多个索引器，在TS中，如果某个类中使用了两种类型的索引器，要求两种索引器的值必须匹配
:::

```ts
class A {
    [prop: number]: B
    [prop: string]: object
}
class B {

}
```

## this指向约束

`tsconfig.json`配置如下：表示不允许this隐式的指向any

```json
// tsconfig.json
{
    "compilerOptions": {
       "noImplicitThis": true
    }
}
```

在TS中，允许在书写函数时，手动声明该函数中this的指向，将this作为函数的第一个参数，该参数只用于约束this，并不是真正的参数，也不会出现在编译结果中。

```ts
interface IUser {
    name: string
    age: number
    sayHello(this: IUser): void
}

const u: IUser = {
    name: "ssdf",
    age: 18,
    sayHello(){
        console.log(this.name, this.age);
    }
}

const say = u.sayHello;
say();// 报错："this" 上下文不能分配给类型为“IUser”的方法的

// 在类中
class User {
    constructor(
        public name: string,
        public age: number
    ){}

    sayHello(this: User){
        console.log(this.name, this.age)
    }
}

const u = new User('dad', 12);
const say = u.sayHello;
say();// 报错："this" 上下文不能分配给类型为“IUser”的方法的
```
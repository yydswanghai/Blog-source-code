# TS中的类 :reminder_ribbon:

## 属性

使用属性列表来描述类中的属性

### 属性的初始化检查

`tsconfig.json`配置添加如下配置：表示更加严格的属性初始化检查

```json
// tsconfig.json
{
    "compilerOptions": {
       "strictPropertyInitialization": true
    }
}
```

### 属性的初始化位置

1. 构造函数中
2. 属性默认值

### 属性修饰

1. 属性可以修饰为可选的
2. 属性可以修饰为只读的

### 访问修饰符

访问修饰符可以控制类中的某个成员的访问权限

| 修饰符     | 含义                                         |
| --------- | ------------------------------------------- |
| public    | 默认的访问修饰符，公开的，所有的代码均可访问        |
| private   | 私有的，只有在类中可以访问                       |
| protected | 详情在面向对象一章                              |

```ts
class User {
    readonly id: number// id不能改变
    public name: string// 默认访问修饰符就是 public，可以省略不写
    public age: number
    gender: "男" | "女" = "男"// 默认值为男
    pid?: string// 可选属性

    /* _publishNumber 和 _curNumber 是仅仅在类里面使用，不暴露出去 */
    private _publishNumber: number = 3;// 每天一共可以发布多少篇文章
    private _curNumber: number = 0;// 当天可以发布的文章数量

    constructor(name: string, age: number){
        this.id = Math.random()
        this.name = name
        this.age = age
    }

    publish(title: string){
        if(this._curNumber < this._publishNumber){
            console.log("发布一篇文章：" + title)
            this._curNumber++;
        }else{
            console.log("今日发布文章的数量已经到达上限")
        }
    }
}

const u = new User("abc", 22);

u.publish("文章1")// 发布一篇文章：文章1
u.publish("文章2")// 发布一篇文章：文章2
u.publish("文章3")// 发布一篇文章：文章3
u.publish("文章4")// 今日发布文章的数量已经到达上限
u.publish("文章5")// 今日发布文章的数量已经到达上限
```

还可以利用访问修饰符的语法糖简化初始化

```ts
class User {
    readonly id: number
    constructor(public name: string, public age: number){
        this.id = Math.random()
    }
}

// 等同于
class User {
    readonly id: number
    name: string
    age: number
    constructor(name: string, age: number){
        this.id = Math.random()
        this.name = name
        this.age = age
    }
}
```

## 访问器

作用：用于控制属性的读取和赋值 (在ES6里就已经有了)

比如上面例子里的年龄，不能是小数，也不能为负数，也可能不会超过200

```ts
class User {
    readonly id: number// 不能改变
    constructor(public name: string, private _age: number){
        this.id = Math.random()
    }

    set age(value: number){
        if(value < 0){
            this._age = 0;
        }else if(value > 200){
            this._age = 200;
        }else{
            this._age = value;
        }
    }

    get age(){
        return Math.floor(this._age)
    }
}

const u = new User("abc", 22);
u.age = -12;
console.log(u.age)// 0
u.age = 200;
console.log(u.age)// 200
u.age = 12.5;
console.log(u.age)// 12
```
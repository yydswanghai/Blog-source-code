# 声明文件 :open_file_folder:

## 概述

### 1. 什么是声明文件？

以`.d.ts`结尾的文件

### 2. 声明文件有什么作用？

当ts代码去读js代码的时候，得不到类型声明。声明文件为js代码提供类型声明。

### 3. 声明文件的位置

- 放置到`tsconfig.json`配置中包含的目录中 (include配置的位置)
- 放置到`node_modules/@types`文件夹中
- 手动配置，使用手动配置后，上面的规则会失效
- 与js代码所在目录相同，并且文件名也相同的文件。用ts代码书写的工程发布之后的格式 (最佳实践)

手动配置：在`tsconfig.json`配置

```json
// tsconfig.json
{
    "compilerOptions": {
        // ...
        "typeRoots": [
            "./types"
        ]
    }
}
```

## 编写

### 手动编写

1. 对已有的库，它是使用js书写而成，并且更改该库的代码为ts成本较高，可以手动编写
2. 对一些第三方库，它们使用js书写而成，并且这些第三库没有提供声明文件，可以手动编写声明文件

#### 全局声明

例如，先删除`node_modules/@types/node`目录，然后新建`global.d.ts`声明文件 (名称随便取，后缀为.d.ts就行)

```ts
// global.d.ts
interface Console {
    log(message?: any): void
    error(message?: any): void
}
// 声明 console
declare var console: Console

type timeHandle = () => void
// 声明 setTimeout
declare function setTimeout(handle: timeHandle, miliseconds: number): number
// 声明 setInterval
declare function setInterval(handle: timeHandle, miliseconds: number): number
```

也可以这样写

```ts
// global.d.ts
declare namespace console {
    function log(message?: any): void
    function error(message?: any): void
}
```

:::warning
`namespace`表示命名空间，可以将其认为是一个对象，命名空间中的内容，必须通过`命名空间.成员名`访问
:::

#### 模块声明

例如：我安装`loadsh`库，如下使用`loadsh`会发现无法找到模块“loadsh”的声明文件

```ts
import _ from "loadsh"

const newArr = _.chunk([3,4,5,6,7], 2)
console.log(newArr);
```

在同目录下新建`loadsh.d.ts`

```ts
// loadsh.d.ts
declare module "loadsh" {
    export function chunk<T>(array: T[], size: number): T[][]
}
```

如果你是使用`nodemon`和`ts-node`运行的，此时还是无法找到模块声明文件，则配置`tsconfig.json`

```json
{
    "compilerOptions": {
        // ...
        "typeRoots": [
            "./node_modules/@types",
            "./src/types"
        ]
    }
}
```

然后新建目录`types/loadsh/index.d.ts`就可以运行了 (内容还是`loadsh.d.ts`声明的内容)

#### 三斜线指令

在一个声明文件中，包含另一个声明文件，前提是该声明文件要被加载，path被加载声明文件的路径。

```ts
// 加载上级目录的index.d.ts
/// <reference path="../index.d.ts" />
```

### 自动生成

工程是使用ts开发的，发布 (编译) 之后，是js文件，发布的是js文件。

如果发布的文件，需要其他开发者使用，可以使用声明文件来描述发布结果中的类型。

在`tsconfig.json`配置

```json
{
    "compilerOptions": {
        // ...
        "declaration": true
    }
}
```

## 发布

1. 当前工程使用ts开发

编译完成后，将编译结果所在文件夹直接发布到npm上即可

2. 为其他第三方库开发的声明文件

发布到`@types/**`中

:::tip
* 进入github的开源项目：https://github.com/DefinitelyTyped/DefinitelyTyped
* fork到自己的开源库中
* 从自己的开源库中克隆到本地
* 本地新建分支 (例如：myloadsh4.3)，在新分支中进行声明文件的开发，在types目录中新建文件夹，在新的文件夹中开发声明文件
* push分支到你的开源库
* 到官方的开源库中，提交pull request
* 等待官方管理员审核（大概一天）
* 审核通过后会将你的分支代码合并到主分支，然后发布到npm
* 之后就可以通过命令`npm i @types/你发布的库名`
:::
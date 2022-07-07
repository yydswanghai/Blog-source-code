# 搭建ts开发环境 :star2:

## 安装 TypeScript

建议使用全局安装，安装之后会有一个cli工具：使用`tsc`命令编译TS代码

```sh
npm install -g typescript
```

例如：在命令行输入`tsc ./index.ts`编译当前目录下的`index.ts`文件

**默认情况下**，TS会做出下面几种假设：

1. 假设当前的执行环境是dom
2. 如果代码中没有使用模块化语句 (import、export)，便认为该代码是全局执行
3. 编译的目标代码是ES3

有两种方式更改以上假设：

1. 使用`tsc`命令行的时候，加上选项参数
2. 使用`ts`配置文件，更改编译选项

## TS 配置文件

生成ts配置文件方式：

1. 直接在根目录下新建`tsconfig.json`文件
2. 在命令行使用`tsc --init`

在使用了配置文件后，使用`tsc`进行编译时，不能跟上文件名，如果跟上文件名，则会忽略配置文件。

```json
// tsconfig.json
{
    "compilerOptions": {// 编译选项
        "target": "es2016",// 配置编译目标代码的版本标准
        "module": "commonjs",// 配置编译目标使用的模块化标准
        "lib": ["es2016"],// 默认情况下ts使用的环境，默认是浏览器环境
        "outDir": "./dist"// 编译后的文件输出位置为 dist文件夹下
    },
    "include": [// 指定ts编译的文件目录，默认是全部都编译
        "./src"// 仅编译 src下的ts文件
    ]
}
```

:::warning
lib配置，默认没有"node"，如果需要node环境，这时候可以使用`@types/node`
:::

```sh
npm i -D @types/node
```

:::tip
`@types`是一个ts官方的类型库，其中包含了很多对js代码的类型描述。

例如：JQuery是用js写的，没有类型检查，可以安装`@types/jquery`，为jquery库添加类型定义
:::

## 使用第三方库简化流程

### ts-node

将ts代码在内存中完成编译，同时完成运行

```sh
npm i -g ts-node
```

命令行运行`ts-node src/index.ts` 类似入口文件，它依然会使用ts配置

### nodemon

用于检测文件的变化

```sh
npm i -g nodemon
```

| 脚本或命令  | 表示含义 |
| ---------- | -------- |
| `nodemon --exec ts-node src/index.ts` | 表示当文件发生变化的时候去执行`ts-node`命令 |
| `nodemon -e ts --exec ts-node src/index.ts` | 同上，但是仅检测`ts`文件 |
| `nodemon --watch src -e ts --exec ts-node src/index.ts` | 同上，但是检测的`ts`文件仅为`src`目录下的 |

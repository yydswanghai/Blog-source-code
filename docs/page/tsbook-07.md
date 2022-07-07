# 模块化 :tada:

涉及到`tsconfig.json`相关配置

|       配置名称       |             含义           |
| :-----------------: | :-----------------------: |
| module              | 设置编译结果中使用的模块化标准 |
| moduleResolution    | 设置解析模块的模式           |
| noImplicitUseStrict | 编译结果中不包含"use strict" |
| removeComments      | 编译结果移除注释             |
| noEmitOnError       | 错误时不生成编译结果          |
| esModuleInterop     | 启用es模块化交互非es模块导出   |

:::tip
前端中的模块化标准：**ES6**、**commonjs**、amd、umd、system、esnext
:::

## TS中如何书写模块化语句

TS中，导入和导出模块，统一使用ES6多模块化标准

:::tip
建议：尽量使用具名导出，少使用默认导出，因为可以根据自动提示生成自动导入代码。

导入的文件名不要添加`.ts`后缀，编译后是没有`ts`文件的
:::

## 编译结果中的模块化

TS中的模块化在编译结果中：

- 如果编译结果的模块化标准是`ES6`：没有区别
- 如果编译结果的模块化标准是`commonjs`：导出的声明会变成`exports`的属性，默认导出会变成`exports`的`default`属性

可以使用`tsc --watch`监听文件改动然后编译ts文件，但是不运行

```ts
// export.ts
export const name = 'kaive';

export function sum(a, b) {
    return a + b;
}

export default function() {
    console.log('默认导出')
}

// index.ts
import print, { name, sum } from "./export";

console.log(name)
console.log(sum(1, 2))
print();
```

编译后

```js
// export.js
// 这句意思等于 exports.__esModule = true
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.name = void 0;
exports.name = 'kaive';
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
function default_1() {
    console.log('默认导出');
}
exports.default = default_1;

// index.js
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = require("./export");
console.log(export_1.name);
console.log((0, export_1.sum)(1, 2));
(0, export_1.default)();// 默认导出生成了一个 default属性
```

## 默认导入的错误

例如，我想在ts中使用node的fs模块

```ts
import fs from "fs"

fs.readFileSync('./')
```

编译后

```js
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
fs_1.default.readFileSync('./');// 找不到default属性
```

会将`readFileSync`方法添加到`default`属性上，这时候在js里`fs_1`是找不到`default`属性的。

因为`fs`模块没有默认导出，因为它使用的是`module.exports`导出

**有三种方式可以解决上面导入问题**

### 方式一

```ts
import { readFileSync } from "fs";

readFileSync('./')
```

编译后


```js
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
(0, fs_1.readFileSync)('./');
```

### 方式二

```ts
import * as fs from "fs";

fs.readFileSync('./')
```

编译后

```js
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
fs.readFileSync('./');
```

### 方式三

修改`tsconfig.json`配置，允许es模块化交互非es模块导出

```json
// tsconfig.json
{
    "compilerOptions": {
       "esModuleInterop": true
    }
}
```

```ts
import fs from "fs"

fs.readFileSync('./')
```

编译后

```js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFileSync('./');
```

## 在TS中书写commonjs模块化代码

:::warning
可以使用如下方式，但是十分不建议这样做
:::

```ts
// 导入
import myModule = require("./export")
```

```ts
// 导出
export = {
    name: 'kevin',
    sum(a: number, b: number){
        return a + b;
    }
}
```

## 模块解析

**模块解析**：应该从什么位置寻找模块

TS中，有两种模块解析策略：

- classic：经典 (因为ts出现在es6模块化之前，而之前都是使用这样方式)
- node：node解析策略（唯一的变化，编译之前是将js替换为ts，现在都建议使用node的解析方式）
    - 相对路径`require("./xxx")`
    - 非相对路径`require("xxx")`

```json
// tsconfig.json
{
    "compilerOptions": {
       "moduleResolution": "node"
    }
}
```

:::tip
小技巧：如果因为每次使用`npm run dev`都需要手动去删除`dist`目录下的文件然后重新运行编译。可以在`package.json`添加如下脚本。

`rd`删除文件夹，`rd`只能删除空文件夹，如果文件夹下面有内容会报错
`rd /s dist`删除文件夹(dist)以及文件夹下的内容，
`/q` 表示默认选确定

```json
"build": "rd /s /q dist & tsc"
```
:::
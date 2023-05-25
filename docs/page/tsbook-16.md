# tsconfig常用配置 :trophy:

```json
{
  "compilerOptions": {
    "target": "es5",// 配置编译目标代码的版本标准
    "lib": [// 默认情况下ts使用的环境
      "dom",
      "dom.iterable",/* dom的迭代器环境 */
      "esnext"
    ],
    "module": "esnext",/* 模块化使用的哪一套标准 webpack -> ts -> js -> babel 不用担心兼容性 */
    "downlevelIteration": true,/* 允许对迭代器进行循环 */
    "allowJs": true,/* 允许在ts代码里 与js代码交互，默认不允许 */
    "skipLibCheck": true,/* 时候跳过对声明文件的类型检查 */
    "esModuleInterop": true,/* 启用es模块化交互非es模块导出，会影响编译结果 */
    "allowSyntheticDefaultImports": true,/* esModuleInterop配置开启后这个配置会自动的被开启，可以省略这个配置选项。不会影响到编译结果 */
    "strict": true,/* 是否经过严格的类型检查，所有方面 */
    "noImplicitUseStrict": false,/* 编译器在生成 JavaScript 代码时是否在文件的顶部插入 "use strict" 语句。如果设置为 true，则编译器不会插入 "use strict" 语句，否则会插入该语句 */
    "strictPropertyInitialization": true,/* 更加严格的属性初始化检查 */
    "strictNullChecks": true,/* 更加严格的空类型检查，不能将null或undefined赋值给其他类型 */
    "forceConsistentCasingInFileNames": true,/* 是否不允许不一致的大小写引用 */
    "moduleResolution": "node",/* 设置解析模块的模式 */
    "resolveJsonModule": true,/* 是否允许解析json模块 */
    "isolatedModules": true,/* 是否把每一个文件当成一个模块 必须出现模块代码 import/export */
    "noImplicitAny": true,/* 开启对隐式any的检查 */
    "noImplicitThis": true,/* 不允许this隐式的指向any */
    "removeComments": true,/* 编译移除注释代码 */
    "noEmit": true,/* 不生成js文件，直接在内存里完成js编译，因为还有会后续的babel处理 */
    "jsx": "preserve"/* 解析jsx的方式 详情：https://www.typescriptlang.org/docs/handbook/jsx.html */
  },
  "include": [// 指定ts编译的文件目录，默认是全部都编译
    "src"
  ]
}
```

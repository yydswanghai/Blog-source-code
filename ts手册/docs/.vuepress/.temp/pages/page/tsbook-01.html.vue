<template><div><h1 id="搭建ts开发环境" tabindex="-1"><a class="header-anchor" href="#搭建ts开发环境" aria-hidden="true">#</a> 搭建ts开发环境 🌟</h1>
<h2 id="安装-typescript" tabindex="-1"><a class="header-anchor" href="#安装-typescript" aria-hidden="true">#</a> 安装 TypeScript</h2>
<p>建议使用全局安装，安装之后会有一个cli工具：使用<code v-pre>tsc</code>命令编译TS代码</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：在命令行输入<code v-pre>tsc ./index.ts</code>编译当前目录下的<code v-pre>index.ts</code>文件</p>
<p><strong>默认情况下</strong>，TS会做出下面几种假设：</p>
<ol>
<li>假设当前的执行环境是dom</li>
<li>如果代码中没有使用模块化语句 (import、export)，便认为该代码是全局执行</li>
<li>编译的目标代码是ES3</li>
</ol>
<p>有两种方式更改以上假设：</p>
<ol>
<li>使用<code v-pre>tsc</code>命令行的时候，加上选项参数</li>
<li>使用<code v-pre>ts</code>配置文件，更改编译选项</li>
</ol>
<h2 id="ts-配置文件" tabindex="-1"><a class="header-anchor" href="#ts-配置文件" aria-hidden="true">#</a> TS 配置文件</h2>
<p>生成ts配置文件方式：</p>
<ol>
<li>直接在根目录下新建<code v-pre>tsconfig.json</code>文件</li>
<li>在命令行使用<code v-pre>tsc --init</code></li>
</ol>
<p>在使用了配置文件后，使用<code v-pre>tsc</code>进行编译时，不能跟上文件名，如果跟上文件名，则会忽略配置文件。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">// 编译选项</span>
        <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es2016"</span><span class="token punctuation">,</span><span class="token comment">// 配置编译目标代码的版本标准</span>
        <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"commonjs"</span><span class="token punctuation">,</span><span class="token comment">// 配置编译目标使用的模块化标准</span>
        <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"es2016"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">// 默认情况下ts使用的环境，默认是浏览器环境</span>
        <span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./dist"</span><span class="token comment">// 编译后的文件输出位置为 dist文件夹下</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">// 指定ts编译的文件目录，默认是全部都编译</span>
        <span class="token string">"./src"</span><span class="token comment">// 仅编译 src下的ts文件</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>lib配置，默认没有&quot;node&quot;，如果需要node环境，这时候可以使用<code v-pre>@types/node</code></p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @types/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>@types</code>是一个ts官方的类型库，其中包含了很多对js代码的类型描述。</p>
<p>例如：JQuery是用js写的，没有类型检查，可以安装<code v-pre>@types/jquery</code>，为jquery库添加类型定义</p>
</div>
<h2 id="使用第三方库简化流程" tabindex="-1"><a class="header-anchor" href="#使用第三方库简化流程" aria-hidden="true">#</a> 使用第三方库简化流程</h2>
<h3 id="ts-node" tabindex="-1"><a class="header-anchor" href="#ts-node" aria-hidden="true">#</a> ts-node</h3>
<p>将ts代码在内存中完成编译，同时完成运行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g ts-node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令行运行<code v-pre>ts-node src/index.ts</code> 类似入口文件，它依然会使用ts配置</p>
<h3 id="nodemon" tabindex="-1"><a class="header-anchor" href="#nodemon" aria-hidden="true">#</a> nodemon</h3>
<p>用于检测文件的变化</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g nodemon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>脚本或命令</th>
<th>表示含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>nodemon --exec ts-node src/index.ts</code></td>
<td>表示当文件发生变化的时候去执行<code v-pre>ts-node</code>命令</td>
</tr>
<tr>
<td><code v-pre>nodemon -e ts --exec ts-node src/index.ts</code></td>
<td>同上，但是仅检测<code v-pre>ts</code>文件</td>
</tr>
<tr>
<td><code v-pre>nodemon --watch src -e ts --exec ts-node src/index.ts</code></td>
<td>同上，但是检测的<code v-pre>ts</code>文件仅为<code v-pre>src</code>目录下的</td>
</tr>
</tbody>
</table>
</div></template>

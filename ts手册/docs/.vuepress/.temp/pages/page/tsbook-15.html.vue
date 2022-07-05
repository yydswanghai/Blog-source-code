<template><div><h1 id="声明文件" tabindex="-1"><a class="header-anchor" href="#声明文件" aria-hidden="true">#</a> 声明文件 📂</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<h3 id="_1-什么是声明文件" tabindex="-1"><a class="header-anchor" href="#_1-什么是声明文件" aria-hidden="true">#</a> 1. 什么是声明文件？</h3>
<p>以<code v-pre>.d.ts</code>结尾的文件</p>
<h3 id="_2-声明文件有什么作用" tabindex="-1"><a class="header-anchor" href="#_2-声明文件有什么作用" aria-hidden="true">#</a> 2. 声明文件有什么作用？</h3>
<p>当ts代码去读js代码的时候，得不到类型声明。声明文件为js代码提供类型声明。</p>
<h3 id="_3-声明文件的位置" tabindex="-1"><a class="header-anchor" href="#_3-声明文件的位置" aria-hidden="true">#</a> 3. 声明文件的位置</h3>
<ul>
<li>放置到<code v-pre>tsconfig.json</code>配置中包含的目录中 (include配置的位置)</li>
<li>放置到<code v-pre>node_modules/@types</code>文件夹中</li>
<li>手动配置，使用手动配置后，上面的规则会失效</li>
<li>与js代码所在目录相同，并且文件名也相同的文件。用ts代码书写的工程发布之后的格式 (最佳实践)</li>
</ul>
<p>手动配置：在<code v-pre>tsconfig.json</code>配置</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        <span class="token property">"typeRoots"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"./types"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写" tabindex="-1"><a class="header-anchor" href="#编写" aria-hidden="true">#</a> 编写</h2>
<h3 id="手动编写" tabindex="-1"><a class="header-anchor" href="#手动编写" aria-hidden="true">#</a> 手动编写</h3>
<ol>
<li>对已有的库，它是使用js书写而成，并且更改该库的代码为ts成本较高，可以手动编写</li>
<li>对一些第三方库，它们使用js书写而成，并且这些第三库没有提供声明文件，可以手动编写声明文件</li>
</ol>
<h4 id="全局声明" tabindex="-1"><a class="header-anchor" href="#全局声明" aria-hidden="true">#</a> 全局声明</h4>
<p>例如，先删除<code v-pre>node_modules/@types/node</code>目录，然后新建<code v-pre>global.d.ts</code>声明文件 (名称随便取，后缀为.d.ts就行)</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// global.d.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">Console</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
<span class="token comment">// 声明 console</span>
<span class="token keyword">declare</span> <span class="token keyword">var</span> <span class="token builtin">console</span><span class="token operator">:</span> Console

<span class="token keyword">type</span> <span class="token class-name">timeHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token comment">// 声明 setTimeout</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>handle<span class="token operator">:</span> timeHandle<span class="token punctuation">,</span> miliseconds<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token comment">// 声明 setInterval</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">setInterval</span><span class="token punctuation">(</span>handle<span class="token operator">:</span> timeHandle<span class="token punctuation">,</span> miliseconds<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以这样写</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// global.d.ts</span>
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> <span class="token builtin">console</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p><code v-pre>namespace</code>表示命名空间，可以将其认为是一个对象，命名空间中的内容，必须通过<code v-pre>命名空间.成员名</code>访问</p>
</div>
<h4 id="模块声明" tabindex="-1"><a class="header-anchor" href="#模块声明" aria-hidden="true">#</a> 模块声明</h4>
<p>例如：我安装<code v-pre>loadsh</code>库，如下使用<code v-pre>loadsh</code>会发现无法找到模块“loadsh”的声明文件</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">"loadsh"</span>

<span class="token keyword">const</span> newArr <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在同目录下新建<code v-pre>loadsh.d.ts</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// loadsh.d.ts</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"loadsh"</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">chunk</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>array<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你是使用<code v-pre>nodemon</code>和<code v-pre>ts-node</code>运行的，此时还是无法找到模块声明文件，则配置<code v-pre>tsconfig.json</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        <span class="token property">"typeRoots"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"./node_modules/@types"</span><span class="token punctuation">,</span>
            <span class="token string">"./src/types"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后新建目录<code v-pre>types/loadsh/index.d.ts</code>就可以运行了 (内容还是<code v-pre>loadsh.d.ts</code>声明的内容)</p>
<h4 id="三斜线指令" tabindex="-1"><a class="header-anchor" href="#三斜线指令" aria-hidden="true">#</a> 三斜线指令</h4>
<p>在一个声明文件中，包含另一个声明文件，前提是该声明文件要被加载，path被加载声明文件的路径。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 加载上级目录的index.d.ts</span>
<span class="token comment">/// &lt;reference path="../index.d.ts" /></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动生成" tabindex="-1"><a class="header-anchor" href="#自动生成" aria-hidden="true">#</a> 自动生成</h3>
<p>工程是使用ts开发的，发布 (编译) 之后，是js文件，发布的是js文件。</p>
<p>如果发布的文件，需要其他开发者使用，可以使用声明文件来描述发布结果中的类型。</p>
<p>在<code v-pre>tsconfig.json</code>配置</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        <span class="token property">"declaration"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h2>
<ol>
<li>当前工程使用ts开发</li>
</ol>
<p>编译完成后，将编译结果所在文件夹直接发布到npm上即可</p>
<ol start="2">
<li>为其他第三方库开发的声明文件</li>
</ol>
<p>发布到<code v-pre>@types/**</code>中</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>进入github的开源项目：https://github.com/DefinitelyTyped/DefinitelyTyped</li>
<li>fork到自己的开源库中</li>
<li>从自己的开源库中克隆到本地</li>
<li>本地新建分支 (例如：myloadsh4.3)，在新分支中进行声明文件的开发，在types目录中新建文件夹，在新的文件夹中开发声明文件</li>
<li>push分支到你的开源库</li>
<li>到官方的开源库中，提交pull request</li>
<li>等待官方管理员审核（大概一天）</li>
<li>审核通过后会将你的分支代码合并到主分支，然后发布到npm</li>
<li>之后就可以通过命令<code v-pre>npm i @types/你发布的库名</code></li>
</ul>
</div>
</div></template>

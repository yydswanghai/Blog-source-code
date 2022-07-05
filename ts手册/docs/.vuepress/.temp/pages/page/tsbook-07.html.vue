<template><div><h1 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化 🎉</h1>
<p>涉及到<code v-pre>tsconfig.json</code>相关配置</p>
<table>
<thead>
<tr>
<th style="text-align:center">配置名称</th>
<th style="text-align:center">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">module</td>
<td style="text-align:center">设置编译结果中使用的模块化标准</td>
</tr>
<tr>
<td style="text-align:center">moduleResolution</td>
<td style="text-align:center">设置解析模块的模式</td>
</tr>
<tr>
<td style="text-align:center">noImplicitUseStrict</td>
<td style="text-align:center">编译结果中不包含&quot;use strict&quot;</td>
</tr>
<tr>
<td style="text-align:center">removeComments</td>
<td style="text-align:center">编译结果移除注释</td>
</tr>
<tr>
<td style="text-align:center">noEmitOnError</td>
<td style="text-align:center">错误时不生成编译结果</td>
</tr>
<tr>
<td style="text-align:center">esModuleInterop</td>
<td style="text-align:center">启用es模块化交互非es模块导出</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>前端中的模块化标准：<strong>ES6</strong>、<strong>commonjs</strong>、amd、umd、system、esnext</p>
</div>
<h2 id="ts中如何书写模块化语句" tabindex="-1"><a class="header-anchor" href="#ts中如何书写模块化语句" aria-hidden="true">#</a> TS中如何书写模块化语句</h2>
<p>TS中，导入和导出模块，统一使用ES6多模块化标准</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>建议：尽量使用具名导出，少使用默认导出，因为可以根据自动提示生成自动导入代码。</p>
<p>导入的文件名不要添加<code v-pre>.ts</code>后缀，编译后是没有<code v-pre>ts</code>文件的</p>
</div>
<h2 id="编译结果中的模块化" tabindex="-1"><a class="header-anchor" href="#编译结果中的模块化" aria-hidden="true">#</a> 编译结果中的模块化</h2>
<p>TS中的模块化在编译结果中：</p>
<ul>
<li>如果编译结果的模块化标准是<code v-pre>ES6</code>：没有区别</li>
<li>如果编译结果的模块化标准是<code v-pre>commonjs</code>：导出的声明会变成<code v-pre>exports</code>的属性，默认导出会变成<code v-pre>exports</code>的<code v-pre>default</code>属性</li>
</ul>
<p>可以使用<code v-pre>tsc --watch</code>监听文件改动然后编译ts文件，但是不运行</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// export.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'kaive'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'默认导出'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts</span>
<span class="token keyword">import</span> print<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> sum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./export"</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// export.js</span>
<span class="token comment">// 这句意思等于 exports.__esModule = true</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> <span class="token string">"__esModule"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>sum <span class="token operator">=</span> exports<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'kaive'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>sum <span class="token operator">=</span> sum<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">default_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'默认导出'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>default <span class="token operator">=</span> default_1<span class="token punctuation">;</span>

<span class="token comment">// index.js</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> <span class="token string">"__esModule"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> export_1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./export"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>export_1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> export_1<span class="token punctuation">.</span>sum<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> export_1<span class="token punctuation">.</span>default<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 默认导出生成了一个 default属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认导入的错误" tabindex="-1"><a class="header-anchor" href="#默认导入的错误" aria-hidden="true">#</a> 默认导入的错误</h2>
<p>例如，我想在ts中使用node的fs模块</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">"fs"</span>

fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> <span class="token string">"__esModule"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs_1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs_1<span class="token punctuation">.</span>default<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 找不到default属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会将<code v-pre>readFileSync</code>方法添加到<code v-pre>default</code>属性上，这时候在js里<code v-pre>fs_1</code>是找不到<code v-pre>default</code>属性的。</p>
<p>因为<code v-pre>fs</code>模块没有默认导出，因为它使用的是<code v-pre>module.exports</code>导出</p>
<p><strong>有三种方式可以解决上面导入问题</strong></p>
<h3 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> readFileSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"fs"</span><span class="token punctuation">;</span>

<span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> <span class="token string">"__esModule"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs_1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> fs_1<span class="token punctuation">.</span>readFileSync<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">'./'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fs <span class="token keyword">from</span> <span class="token string">"fs"</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> <span class="token string">"__esModule"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式三" tabindex="-1"><a class="header-anchor" href="#方式三" aria-hidden="true">#</a> 方式三</h3>
<p>修改<code v-pre>tsconfig.json</code>配置，允许es模块化交互非es模块导出</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">"fs"</span>

fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> __importDefault <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__importDefault<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">mod</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>mod <span class="token operator">&amp;&amp;</span> mod<span class="token punctuation">.</span>__esModule<span class="token punctuation">)</span> <span class="token operator">?</span> mod <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">"default"</span><span class="token operator">:</span> mod <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> <span class="token string">"__esModule"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs_1 <span class="token operator">=</span> <span class="token function">__importDefault</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs_1<span class="token punctuation">.</span>default<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在ts中书写commonjs模块化代码" tabindex="-1"><a class="header-anchor" href="#在ts中书写commonjs模块化代码" aria-hidden="true">#</a> 在TS中书写commonjs模块化代码</h2>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>可以使用如下方式，但是十分不建议这样做</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 导入</span>
<span class="token keyword">import</span> myModule <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"./export"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 导出</span>
<span class="token keyword">export</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'kevin'</span><span class="token punctuation">,</span>
    <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块解析" tabindex="-1"><a class="header-anchor" href="#模块解析" aria-hidden="true">#</a> 模块解析</h2>
<p><strong>模块解析</strong>：应该从什么位置寻找模块</p>
<p>TS中，有两种模块解析策略：</p>
<ul>
<li>classic：经典 (因为ts出现在es6模块化之前，而之前都是使用这样方式)</li>
<li>node：node解析策略（唯一的变化，编译之前是将js替换为ts，现在都建议使用node的解析方式）
<ul>
<li>相对路径<code v-pre>require(&quot;./xxx&quot;)</code></li>
<li>非相对路径<code v-pre>require(&quot;xxx&quot;)</code></li>
</ul>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"node"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>小技巧：如果因为每次使用<code v-pre>npm run dev</code>都需要手动去删除<code v-pre>dist</code>目录下的文件然后重新运行编译。可以在<code v-pre>package.json</code>添加如下脚本。</p>
<p><code v-pre>rd</code>删除文件夹，<code v-pre>rd</code>只能删除空文件夹，如果文件夹下面有内容会报错
<code v-pre>rd /s dist</code>删除文件夹(dist)以及文件夹下的内容，
<code v-pre>/q</code> 表示默认选确定</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"rd /s /q dist &amp; tsc"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
</div></template>

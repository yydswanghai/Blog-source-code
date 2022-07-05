<template><div><h1 id="其他常用类型" tabindex="-1"><a class="header-anchor" href="#其他常用类型" aria-hidden="true">#</a> 其他常用类型 🌈</h1>
<h2 id="扩展类型" tabindex="-1"><a class="header-anchor" href="#扩展类型" aria-hidden="true">#</a> 扩展类型</h2>
<ol>
<li>类型别名</li>
<li>枚举</li>
<li>接口</li>
<li>类</li>
</ol>
<h2 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h2>
<p>联合类型: 多种类型任选其一</p>
<p>配合<strong>类型保护</strong>进行判断</p>
<h2 id="类型保护" tabindex="-1"><a class="header-anchor" href="#类型保护" aria-hidden="true">#</a> 类型保护</h2>
<p>当对某个变量进行类型判断之后，在判断的语句块中便可以确定它的确切类型。<code v-pre>typeof</code>可以触发类型保护。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// name是一个联合类型，可以是字符串也可以是undefined</span>
<span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> name <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 类型保护</span>
    name<span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="void类型" tabindex="-1"><a class="header-anchor" href="#void类型" aria-hidden="true">#</a> void类型</h2>
<p>通常用于约束函数的返回值，表示该函数没有返回值</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Matt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="never类型" tabindex="-1"><a class="header-anchor" href="#never类型" aria-hidden="true">#</a> never类型</h2>
<p>通常用于约束函数的返回值，表示该函数永远不可能结束</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 该函数永远不会结束</span>
<span class="token keyword">function</span> <span class="token function">throwError</span><span class="token punctuation">(</span>msg<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">never</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>abc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">alwaysDoSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">never</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字面量类型" tabindex="-1"><a class="header-anchor" href="#字面量类型" aria-hidden="true">#</a> 字面量类型</h2>
<p>使用一个值进行约束</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> gender<span class="token operator">:</span> <span class="token string">"男"</span> <span class="token operator">|</span> <span class="token string">"女"</span><span class="token punctuation">;</span><span class="token comment">// gender只能取值'男'/'女'</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// arr只能取值为一个空数组</span>
<span class="token keyword">let</span> user<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">// user必须取值为一个对象，且对象里必须有一个string类型的name和number类型的age</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元祖类型-tuple" tabindex="-1"><a class="header-anchor" href="#元祖类型-tuple" aria-hidden="true">#</a> 元祖类型 (Tuple)</h2>
<p>一个固定长度的数组，并且数组中的每一项的类型确定</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> tu<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 数组必须有且只有两项，第一项必须为string，第二项必须为number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="any类型" tabindex="-1"><a class="header-anchor" href="#any类型" aria-hidden="true">#</a> any类型</h2>
<p>any类型可以绕过类型检查，因此any类型的数据可以赋值给任意类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> data<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">"Matt"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> num<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

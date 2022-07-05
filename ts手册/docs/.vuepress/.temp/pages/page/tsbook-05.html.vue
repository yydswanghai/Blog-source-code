<template><div><h1 id="类型别名-type" tabindex="-1"><a class="header-anchor" href="#类型别名-type" aria-hidden="true">#</a> 类型别名 type 🌎</h1>
<p>在一个系统中，可能会遇到多处位置使用到这个用户的类型，如下，变量<code v-pre>user</code>和函数<code v-pre>getUsers</code>返回值</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> user<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">"男"</span> ｜ <span class="token string">"女"</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">"男"</span> ｜ <span class="token string">"女"</span>
<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把这个类型提出来形成一个名称，这个名称就是<strong>类型别名</strong> (对已知的一些类型定义名称)</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">类型名</span> <span class="token operator">=</span> <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类型别名里也可以使用其他类型别名</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Gender</span> <span class="token operator">=</span> <span class="token string">"男"</span> ｜ <span class="token string">"女"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> Gender
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user<span class="token operator">:</span> User<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getUsers</span><span class="token punctuation">(</span>g<span class="token operator">:</span> Gender<span class="token punctuation">)</span><span class="token operator">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

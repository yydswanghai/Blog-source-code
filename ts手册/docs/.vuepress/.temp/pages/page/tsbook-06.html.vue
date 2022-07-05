<template><div><h1 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举 🏖️</h1>
<h2 id="字面量类型的问题" tabindex="-1"><a class="header-anchor" href="#字面量类型的问题" aria-hidden="true">#</a> 字面量类型的问题</h2>
<ul>
<li>在类型约束位置，会产生重复代码。可以使用类型别名解决该问题。</li>
<li>逻辑含义和真实的值产生了混淆，会导致当修改真实值的时候，产生大量的修改。</li>
<li>字面量类型不会进入到编译结果。</li>
</ul>
<p><strong>枚举通常用于约束某个变量的取值范围</strong>，字面量和联合类型配置使用，也可以达到同样的目标。</p>
<p><strong>定义一个枚举</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> 枚举名 <span class="token punctuation">{</span>
    枚举字段<span class="token number">1</span> <span class="token operator">=</span> 值<span class="token number">1</span><span class="token punctuation">,</span>
    枚举字段<span class="token number">2</span> <span class="token operator">=</span> 值<span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Gender <span class="token punctuation">{</span>
    male <span class="token operator">=</span> <span class="token string">'男'</span><span class="token punctuation">,</span>
    female <span class="token operator">=</span> <span class="token string">'女'</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> gender<span class="token operator">:</span> Gender<span class="token punctuation">;</span>
gender <span class="token operator">=</span> Gender<span class="token punctuation">.</span>male<span class="token punctuation">;</span><span class="token comment">// 男</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>枚举会出现在编译结果中，编译结果中表现为对象。</p>
</div>
<h2 id="枚举的规则" tabindex="-1"><a class="header-anchor" href="#枚举的规则" aria-hidden="true">#</a> 枚举的规则</h2>
<ul>
<li>枚举的字段值只能使用字符串或数字</li>
<li>数字枚举的值会自动自增，第一个如果不赋值默认为0</li>
<li>被数字枚举约束的变量，可以直接赋值为数字（不建议这样做）</li>
<li>数字枚举的编译结果 和 字符串枚举的编译结果有差异</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Level <span class="token punctuation">{</span>
    level1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    level2<span class="token punctuation">,</span>
    level3<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> l<span class="token operator">:</span> Level <span class="token operator">=</span> Level<span class="token punctuation">.</span>level2<span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Level <span class="token punctuation">{</span>
    level1<span class="token punctuation">,</span>
    level2<span class="token punctuation">,</span>
    level3<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">"level1"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">"level2"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">"level3"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token number">0</span><span class="token operator">:</span> <span class="token string">"level1"</span><span class="token punctuation">,</span>
    <span class="token number">1</span><span class="token operator">:</span> <span class="token string">"level2"</span><span class="token punctuation">,</span>
    <span class="token number">2</span><span class="token operator">:</span> <span class="token string">"level3"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2>
<ul>
<li>尽量不要在一个枚举中既出现字符串字段，又出现数字字段</li>
<li>使用枚举时，尽量使用枚举字段的名称，而不使用真实的值</li>
</ul>
<h2 id="枚举的位运算" tabindex="-1"><a class="header-anchor" href="#枚举的位运算" aria-hidden="true">#</a> 枚举的位运算</h2>
<p>针对数字枚举</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Permission <span class="token punctuation">{</span>
    Read <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>   <span class="token comment">// 0001 可读</span>
    Write <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>  <span class="token comment">// 0010 可写</span>
    Create <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">// 0100 可添加</span>
    Delete <span class="token operator">=</span> <span class="token number">8</span>  <span class="token comment">// 1000 可删除</span>
<span class="token punctuation">}</span>
<span class="token comment">// 通过二进制的标识来标示权限位</span>

<span class="token comment">// 1. 如何组合权限 (使用或运算)</span>
<span class="token comment">// 0001</span>
<span class="token comment">// 0010</span>
<span class="token comment">// 或</span>
<span class="token comment">// 0011</span>
<span class="token keyword">let</span> p<span class="token operator">:</span>Permission <span class="token operator">=</span> Permission<span class="token punctuation">.</span>Read <span class="token operator">|</span> Permission<span class="token punctuation">.</span>Write<span class="token punctuation">;</span>

<span class="token comment">// 2. 如何判断是否拥有某个权限 (使用且运算)</span>
<span class="token comment">// 0011 target</span>
<span class="token comment">// **** per => 0010</span>
<span class="token comment">// 且</span>
<span class="token comment">// 0010</span>
<span class="token keyword">function</span> <span class="token function">hasPermission</span><span class="token punctuation">(</span>target<span class="token operator">:</span>Permission<span class="token punctuation">,</span> per<span class="token operator">:</span>Permission<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;</span> per<span class="token punctuation">)</span> <span class="token operator">===</span> per<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 判断变量p是否拥有可读/可写/可添加/可删除权限</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> Permission<span class="token punctuation">.</span>Read<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> Permission<span class="token punctuation">.</span>Write<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> Permission<span class="token punctuation">.</span>Create<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// false</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> Permission<span class="token punctuation">.</span>Delete<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// false</span>

<span class="token comment">// 3. 如何删除某个权限 (使用异或运算)</span>
<span class="token comment">// 0011</span>
<span class="token comment">// 0010</span>
<span class="token comment">// 异或</span>
<span class="token comment">// 0001</span>
p <span class="token operator">=</span> p <span class="token operator">^</span> Permission<span class="token punctuation">.</span>Write<span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> Permission<span class="token punctuation">.</span>Write<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// false</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

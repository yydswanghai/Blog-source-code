<template><div><h1 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器 🖼️</h1>
<p>装饰器 (decorator)</p>
<p>面向对象的概念 (java：注解，C#：特征)</p>
<p>目前js支持装饰器</p>
<h2 id="解决的问题" tabindex="-1"><a class="header-anchor" href="#解决的问题" aria-hidden="true">#</a> 解决的问题</h2>
<p>装饰器，能够带来额外的信息量，可以达到分离关注点的目的</p>
<ul>
<li>信息书写位置的问题</li>
<li>重复代码的问题</li>
</ul>
<p>上述两个问题产生的根源：某些信息在定义时，能够附加的信息量有限</p>
<p>装饰器的作用：为某些属性、类、参数、方法提供元数据信息 (metadata)</p>
<p>元数据：描述数据的数据，类比html里的<code v-pre>&lt;meta&gt;</code>标签</p>
<h2 id="装饰器的本质" tabindex="-1"><a class="header-anchor" href="#装饰器的本质" aria-hidden="true">#</a> 装饰器的本质</h2>
<p>在js中，装饰器是一个函数。(装饰器是要参与运行的)</p>
<p>装饰器可以修饰：</p>
<ul>
<li>类</li>
<li>成员（属性、方法）</li>
<li>参数</li>
</ul>
<h2 id="类装饰器" tabindex="-1"><a class="header-anchor" href="#类装饰器" aria-hidden="true">#</a> 类装饰器</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>类装饰器的本质是一个函数，该函数接收一个参数，表示类本身 (构造函数本身)</p>
</div>
<p>使用装饰器：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">得到一个函数</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在ts中-如何约束一个变量为类" tabindex="-1"><a class="header-anchor" href="#在ts中-如何约束一个变量为类" aria-hidden="true">#</a> 在TS中，如何约束一个变量为类？</h3>
<ol>
<li><code v-pre>Function</code></li>
<li><code v-pre>new (参数) =&gt; object</code></li>
</ol>
<p>在TS中要使用装饰器，要在<code v-pre>tsconfig.json</code>配置如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"experimentalDecorators"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>装饰器函数的运行时间：在类定义后直接运行 (可以自行查看tsc编译后的js会发现，在类定义下面会运行一个<strong>装饰器的函数</strong>)</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 这里target 约束为一个无参的类构造函数</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// [class User]</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">test</span></span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类装饰器可以具有的返回值" tabindex="-1"><a class="header-anchor" href="#类装饰器可以具有的返回值" aria-hidden="true">#</a> 类装饰器可以具有的返回值</h3>
<ol>
<li>void：仅运行函数</li>
<li>返回一个新的类：会将新的类替换掉装饰目标</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>小技巧：<code v-pre>new () =&gt; object</code>使用剩余参数</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">test</span></span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>
        <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>多个装饰器组合：会按照后加入先调用的顺序进行调用。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">constructor</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> object
<span class="token keyword">function</span> <span class="token function">d1</span><span class="token punctuation">(</span>target<span class="token operator">:</span> constructor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'d1'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">d2</span><span class="token punctuation">(</span>target<span class="token operator">:</span> constructor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'d2'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">d2</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">d1</span></span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 输出</span>
<span class="token comment">// => d1</span>
<span class="token comment">// => d2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先运行函数从上至下d2()、d1()，得到两个装饰器，然后运行装饰器</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">constructor</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> object
<span class="token keyword">function</span> <span class="token function">d1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'d1'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> constructor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'d1 decorator'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">d2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'d2'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> constructor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'d2 decorator'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">d2</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">d1</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 输出</span>
<span class="token comment">// => d2</span>
<span class="token comment">// => d1</span>
<span class="token comment">// => d1 decorator</span>
<span class="token comment">// => d2 decorator</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="成员装饰器" tabindex="-1"><a class="header-anchor" href="#成员装饰器" aria-hidden="true">#</a> 成员装饰器</h2>
<h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>属性装饰器也是一个函数，该函数需要两个参数：</p>
<ol>
<li>如果是静态属性，则为类本身，如果是实例属性，则为类的原型</li>
<li>固定为一个字符串，表示属性名</li>
</ol>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">d</span><span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> target <span class="token operator">===</span> <span class="token constant">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 测试记得注释 "strictNullChecks": true</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">d</span></span>
    prop1<span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">d</span></span>
    prop2<span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">d</span></span>
    <span class="token keyword">static</span> prop3<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">// {} true 'prop1'</span>
<span class="token comment">// {} true 'prop2'</span>
<span class="token comment">// [class A] false 'prop3'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>方法装饰器也是一个函数，该函数需要三个参数：</p>
<ol>
<li>如果是静态方法，则为类本身，如果是实例方法，则为类的原型</li>
<li>固定为一个字符串，表示方法名</li>
<li>属性描述对象</li>
</ol>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">d</span><span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">d</span></span>
    <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// {} 'method1' {</span>
<span class="token comment">//      value: [Function: method1],</span>
<span class="token comment">//      writable: true,</span>
<span class="token comment">//      enumerable: false,</span>
<span class="token comment">//      configurable: true</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同一个位置上可以使用多个装饰器</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">enumrable</span><span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    descriptor<span class="token punctuation">.</span>enumerable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">// 让方法可以被遍历</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">useless</span><span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">"该方法已过期"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">enumrable</span></span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">useless</span></span>
    <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'method1'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">enumrable</span></span>
    <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token comment">// method1 method2</span>
<span class="token punctuation">}</span>
a<span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// method1该方法已过期</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用第三方库" tabindex="-1"><a class="header-anchor" href="#常用第三方库" aria-hidden="true">#</a> 常用第三方库</h2>
<h3 id="reflect-metadata" tabindex="-1"><a class="header-anchor" href="#reflect-metadata" aria-hidden="true">#</a> reflect-metadata</h3>
<p>该库的作用：保存元数据</p>
<h3 id="class-validator" tabindex="-1"><a class="header-anchor" href="#class-validator" aria-hidden="true">#</a> class-validator</h3>
<p>该库的作用：类验证</p>
<h3 id="class-transformer" tabindex="-1"><a class="header-anchor" href="#class-transformer" aria-hidden="true">#</a> class-transformer</h3>
<p>该库的作用：将平面对象转换成类</p>
<h2 id="参数装饰器" tabindex="-1"><a class="header-anchor" href="#参数装饰器" aria-hidden="true">#</a> 参数装饰器</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>参数装饰器：需要在 依赖注入 (依赖倒置) 下才能发挥作用</p>
<p>要求函数有三个参数：</p>
<ol>
<li>如果方法是静态的，则为类本身；如果方法是实例方法，则为类的原型</li>
<li>方法名称</li>
<li>在参数列表中的索引</li>
</ol>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> method<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// {} sum 1</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyMath</span> <span class="token punctuation">{</span>
    <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">test</span></span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts自动注入的元数据" tabindex="-1"><a class="header-anchor" href="#ts自动注入的元数据" aria-hidden="true">#</a> TS自动注入的元数据</h2>
<p>如果安装了<code v-pre>reflect-metadata</code>，并且导入了该库，并且在某个成员上添加了元数据，并且启用了如下<code v-pre>tsconfig.json</code>配置(生成装饰器的元数据)配置。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"emitDecoratorMetadata"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则TS在编译结果中，会将约束的类型，作为元数据加入到对应的位置，这样一来，TS的类型检查 (约束) 将有机会在<strong>运行时</strong>进行</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">"reflect-metadata"</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Reflect</span></span><span class="token punctuation">.</span><span class="token function">metadata</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">)</span>
    loginId<span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Reflect</span></span><span class="token punctuation">.</span><span class="token function">metadata</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">)</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

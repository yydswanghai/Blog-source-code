<template><div><h1 id="ts中的类" tabindex="-1"><a class="header-anchor" href="#ts中的类" aria-hidden="true">#</a> TS中的类 🎗️</h1>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p>使用属性列表来描述类中的属性</p>
<h3 id="属性的初始化检查" tabindex="-1"><a class="header-anchor" href="#属性的初始化检查" aria-hidden="true">#</a> 属性的初始化检查</h3>
<p><code v-pre>tsconfig.json</code>配置添加如下配置：表示更加严格的属性初始化检查</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"strictPropertyInitialization"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性的初始化位置" tabindex="-1"><a class="header-anchor" href="#属性的初始化位置" aria-hidden="true">#</a> 属性的初始化位置</h3>
<ol>
<li>构造函数中</li>
<li>属性默认值</li>
</ol>
<h3 id="属性修饰" tabindex="-1"><a class="header-anchor" href="#属性修饰" aria-hidden="true">#</a> 属性修饰</h3>
<ol>
<li>属性可以修饰为可选的</li>
<li>属性可以修饰为只读的</li>
</ol>
<h3 id="访问修饰符" tabindex="-1"><a class="header-anchor" href="#访问修饰符" aria-hidden="true">#</a> 访问修饰符</h3>
<p>访问修饰符可以控制类中的某个成员的访问权限</p>
<table>
<thead>
<tr>
<th>修饰符</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>public</td>
<td>默认的访问修饰符，公开的，所有的代码均可访问</td>
</tr>
<tr>
<td>private</td>
<td>私有的，只有在类中可以访问</td>
</tr>
<tr>
<td>protected</td>
<td>详情在面向对象一章</td>
</tr>
</tbody>
</table>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token comment">// id不能改变</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token comment">// 默认访问修饰符就是 public，可以省略不写</span>
    <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
    gender<span class="token operator">:</span> <span class="token string">"男"</span> <span class="token operator">|</span> <span class="token string">"女"</span> <span class="token operator">=</span> <span class="token string">"男"</span><span class="token comment">// 默认值为男</span>
    pid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token comment">// 可选属性</span>

    <span class="token comment">/* _publishNumber 和 _curNumber 是仅仅在类里面使用，不暴露出去 */</span>
    <span class="token keyword">private</span> _publishNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span><span class="token comment">// 每天一共可以发布多少篇文章</span>
    <span class="token keyword">private</span> _curNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 当天可以发布的文章数量</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>

    <span class="token function">publish</span><span class="token punctuation">(</span>title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_curNumber <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_publishNumber<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"发布一篇文章："</span> <span class="token operator">+</span> title<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_curNumber<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"今日发布文章的数量已经到达上限"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

u<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">"文章1"</span><span class="token punctuation">)</span><span class="token comment">// 发布一篇文章：文章1</span>
u<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">"文章2"</span><span class="token punctuation">)</span><span class="token comment">// 发布一篇文章：文章2</span>
u<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">"文章3"</span><span class="token punctuation">)</span><span class="token comment">// 发布一篇文章：文章3</span>
u<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">"文章4"</span><span class="token punctuation">)</span><span class="token comment">// 今日发布文章的数量已经到达上限</span>
u<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">"文章5"</span><span class="token punctuation">)</span><span class="token comment">// 今日发布文章的数量已经到达上限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以利用访问修饰符的语法糖简化初始化</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问器" tabindex="-1"><a class="header-anchor" href="#访问器" aria-hidden="true">#</a> 访问器</h2>
<p>作用：用于控制属性的读取和赋值 (在ES6里就已经有了)</p>
<p>比如上面例子里的年龄，不能是小数，也不能为负数，也可能不会超过200</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token comment">// 不能改变</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">private</span> _age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">></span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
u<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token comment">// 0</span>
u<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token comment">// 200</span>
u<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">12.5</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token comment">// 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

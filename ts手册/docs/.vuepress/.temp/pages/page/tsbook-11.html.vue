<template><div><h1 id="类型兼容性" tabindex="-1"><a class="header-anchor" href="#类型兼容性" aria-hidden="true">#</a> 类型兼容性 🎯</h1>
<p>若将 B 赋值 A，如果能完成赋值，则 B 和 A类型兼容</p>
<p>鸭子辨型法 (子结构辨型法)：目标类型需要某一些特征，赋值的类型只要能满足该特征即可</p>
<ol>
<li><strong>基本类型</strong>：完全匹配</li>
<li><strong>对象类型</strong>：鸭子辨型法，当直接使用对象字面量赋值的时候，会进行更加严格的判断</li>
</ol>
<h3 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h3>
<p>告诉TS当前数据是什么类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>数据 <span class="token keyword">as</span> 类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="非空断言" tabindex="-1"><a class="header-anchor" href="#非空断言" aria-hidden="true">#</a> 非空断言</h3>
<p>在数据之后加上一个<code v-pre>!</code>，告诉TS，不用考虑该数据为空的情况</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Duck</span> <span class="token punctuation">{</span>
    sound<span class="token operator">:</span> <span class="token string">"嘎嘎嘎"</span>
    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"伪装成鸭子的人"</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    sound<span class="token operator">:</span> <span class="token string">"嘎嘎嘎"</span> <span class="token keyword">as</span> <span class="token string">"嘎嘎嘎"</span><span class="token punctuation">,</span>
    <span class="token comment">//   数据"嘎嘎嘎" 断言 类型"嘎嘎嘎"</span>
    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"正在游泳，并发出了"</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sound<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// person 可以赋值给 Duck类型，而且 duck 里只有 sound 属性和 swin 方法</span>
<span class="token keyword">let</span> duck<span class="token operator">:</span> Duck <span class="token operator">=</span> person<span class="token punctuation">;</span>

<span class="token comment">// 如果你使用对象字面量直接赋值会报错，因为这里你明确的知道是Duck的类型</span>
<span class="token keyword">let</span> duck2<span class="token operator">:</span> Duck <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"伪装成鸭子的人"</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    sound<span class="token operator">:</span> <span class="token string">"嘎嘎嘎"</span> <span class="token keyword">as</span> <span class="token string">"嘎嘎嘎"</span><span class="token punctuation">,</span>
    <span class="token comment">//   数据"嘎嘎嘎" 断言 类型"嘎嘎嘎"</span>
    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"正在游泳，并发出了"</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sound<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><strong>函数类型</strong></li>
</ol>
<p><strong>参数</strong>：传递给目标函数的参数可以少，但不可以多
<strong>返回值</strong>：要求返回必须返回；不要求返回，你随意</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>numbers<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token operator">:</span> Condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            s <span class="token operator">+=</span> n<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1.不需要i的时候</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n <span class="token operator">=></span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.需要i得时候</span>
<span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>n<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

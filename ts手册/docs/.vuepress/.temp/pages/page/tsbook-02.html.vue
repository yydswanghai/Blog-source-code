<template><div><h1 id="基本类型检查" tabindex="-1"><a class="header-anchor" href="#基本类型检查" aria-hidden="true">#</a> 基本类型检查 💯</h1>
<p>TS是一个<strong>可选</strong>的静态的类型系统</p>
<h3 id="如何进行类型约束" tabindex="-1"><a class="header-anchor" href="#如何进行类型约束" aria-hidden="true">#</a> 如何进行类型约束?</h3>
<p><strong>仅需要在变量、函数的参数、函数的返回值的位置加上 <code v-pre>: 类型</code></strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>小技巧：当我们想改<code v-pre>sum</code>这个函数名的时候，可以双击选中函数名，然后按<code v-pre>F2</code>或右键<code v-pre>重命名符号</code>，然后在输入框里修改为<code v-pre>add</code>，此时，所有的<code v-pre>sum</code>名都被同步修改为了<code v-pre>add</code>。因为ts里有严格的类型检查，他们之间是有联系的。</p>
<p>不仅如此，如果在其他的文件里调用了这个<code v-pre>sum</code>如果不知道这个<code v-pre>sum</code>函数写的啥可以双击选中函数，然后按<code v-pre>F12</code>或右键<code v-pre>转到定义</code>，它就会跳到函数<code v-pre>sum</code>所在定义的位置。</p>
</div>
<h2 id="类型推导" tabindex="-1"><a class="header-anchor" href="#类型推导" aria-hidden="true">#</a> 类型推导</h2>
<p>ts在很多场景中可以自动完成<strong>类型推导</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 推导成功 sum返回值为number类型，所以变量num也是number类型</span>

<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'kevin'</span><span class="token punctuation">;</span><span class="token comment">// 推导成功 name为string类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么时候能推导成功" tabindex="-1"><a class="header-anchor" href="#什么时候能推导成功" aria-hidden="true">#</a> 什么时候能推导成功？</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> age<span class="token punctuation">;</span><span class="token comment">// 没有推导成功，此处类型为any类型，并且age左下角有三个小点，表示警告</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p><code v-pre>any</code>：表示任意类型，对该类型，ts不进行类型检查</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>小技巧，如何区分数字字符串和数字，关键看怎么读？</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> phone<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">13344445555</span><span class="token punctuation">;</span><span class="token comment">// 读作1百3十3亿4千4百4十4万5千5百5十5</span>
<span class="token comment">// 而正常手机号都是读 13344445555a 所以这里是字符串</span>
<span class="token keyword">let</span> phone <span class="token operator">=</span> <span class="token string">'13344445555'</span><span class="token punctuation">;</span><span class="token comment">// 所以这里phone被推导的类型应为string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源代码和编译结果的差异" tabindex="-1"><a class="header-anchor" href="#源代码和编译结果的差异" aria-hidden="true">#</a> 源代码和编译结果的差异</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'kevin'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> phone <span class="token operator">=</span> <span class="token string">'13344445555'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tsc编译后</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'kevin'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> phone <span class="token operator">=</span> <span class="token string">'13344445555'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>编译结果中没有类型约束信息</p>
</div>
<h2 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型" aria-hidden="true">#</a> 基本类型</h2>
<table>
<thead>
<tr>
<th>类型关键字</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>number</td>
<td>数字</td>
</tr>
<tr>
<td>string</td>
<td>字符串</td>
</tr>
<tr>
<td>boolean</td>
<td>布尔</td>
</tr>
<tr>
<td>下面例子</td>
<td>数组</td>
</tr>
<tr>
<td>object</td>
<td>对象</td>
</tr>
<tr>
<td>null和undefined</td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 数字类型的数组，数组的每一项只能为number类型</span>
<span class="token keyword">let</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 可以简写，因为ts会类型推导</span>

<span class="token keyword">let</span> nums<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>null</code>和<code v-pre>undefined</code>是所有其他类型的子类型，它可以赋值给其他类型。</p>
<p>你可以在<code v-pre>tsconfig.json</code>配置文件里加上如下配置，表示更加严格的空类型检查，这样就不能将<code v-pre>null</code>或<code v-pre>undefined</code>赋值给其他类型了。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"strictNullChecks"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> n<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>

<template><div><h1 id="类型演算" tabindex="-1"><a class="header-anchor" href="#类型演算" aria-hidden="true">#</a> 类型演算 🎶</h1>
<p>根据已知的信息，计算出新的类型</p>
<h2 id="typeof-关键字" tabindex="-1"><a class="header-anchor" href="#typeof-关键字" aria-hidden="true">#</a> typeof 关键字</h2>
<p>TS中的<code v-pre>typeof</code>，书写的位置在类型约束的位置上。</p>
<p>表示：获取某个数据的类型</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>TS中的<code v-pre>typeof</code>，与JS中的<code v-pre>typeof</code>不太一样，根据作用的位置区分</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'abc'</span>

<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token keyword">typeof</span> a <span class="token operator">=</span> <span class="token string">'dasdas'</span>
<span class="token comment">// 让b与a的类型保持一致</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当<code v-pre>typeof</code>作用于类的时候，得到的类型，是该类的构造函数</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    loginId<span class="token operator">:</span> <span class="token builtin">string</span>
    loginPwd<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">// typeof User 计算出来的是User的构造函数，直接书写User表示的是类本身</span>
<span class="token keyword">function</span> <span class="token function">createUser</span><span class="token punctuation">(</span>cls<span class="token operator">:</span> <span class="token keyword">typeof</span> User<span class="token punctuation">)</span><span class="token operator">:</span> User <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">cls</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 需要传递一个 构造函数 生成一个用户对象</span>
<span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token function">createUser</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keyof-关键字" tabindex="-1"><a class="header-anchor" href="#keyof-关键字" aria-hidden="true">#</a> keyof 关键字</h2>
<p>作用于类、接口、类型别名，用于获取其他类型中的所有成员名组成的联合类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    loginId<span class="token operator">:</span> <span class="token builtin">string</span>
    loginPwd<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">// prop的类型应该是User里某个字段中的一个</span>
<span class="token comment">// 为什么要用 keyof User：将User类型里的所有成员名拿出来形成的联合类型，是动态的</span>
<span class="token comment">// 如果你使用联合类型，如果User的属性名更改了，或者后续又增加或修改会导致这里引用prop出问题</span>
<span class="token keyword">function</span> <span class="token function">printUserProperty</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> User<span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token keyword">keyof</span> User<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
    loginId<span class="token operator">:</span> <span class="token string">'Matt'</span><span class="token punctuation">,</span>
    loginPwd<span class="token operator">:</span> <span class="token string">'123145'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token function">printUserProperty</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="in-关键字" tabindex="-1"><a class="header-anchor" href="#in-关键字" aria-hidden="true">#</a> in 关键字</h2>
<p>该关键字往往和<code v-pre>keyof</code>联用，限制某个索引类型的取值范围</p>
<p>例：有一个如下的User类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    loginId<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    createDate<span class="token operator">:</span> Date
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你要通过<code v-pre>User</code>的所有属性来得到一个全新的，但是类型全部是string的类型可以使用<code v-pre>in</code>关键字</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UserString</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>p <span class="token keyword">in</span> <span class="token string">"loginId"</span> <span class="token operator">|</span> <span class="token string">"age"</span> <span class="token operator">|</span> <span class="token string">"createDate"</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于 ⬇️</span>
<span class="token keyword">type</span> <span class="token class-name">UserString</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    loginId<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">string</span>
    createDate<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u<span class="token operator">:</span> UserString <span class="token operator">=</span> <span class="token punctuation">{</span>
    loginId<span class="token operator">:</span> <span class="token string">'dandv'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token string">'123456'</span><span class="token punctuation">,</span>
    createDate<span class="token operator">:</span> <span class="token string">'2022-01-01'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这样做也不太好，如果后续对原<code v-pre>User</code>类型新增、修改或删除属性，你也不能通过<code v-pre>F2</code>一次性修改，会造成一些错误</p>
<p>于是可以利用<code v-pre>keyof</code>关键字，获取<code v-pre>User</code>类型里的所有类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UserString</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>p <span class="token keyword">in</span> <span class="token keyword">keyof</span> User<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于 ⬇️</span>
<span class="token keyword">type</span> <span class="token class-name">UserString</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    loginId<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">string</span>
    createDate<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以：新类型和原<code v-pre>User</code>类型的类型也保持一致</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">newUser</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>p <span class="token keyword">in</span> <span class="token keyword">keyof</span> User<span class="token punctuation">]</span><span class="token operator">:</span> User<span class="token punctuation">[</span>p<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于 ⬇️</span>
<span class="token keyword">type</span> <span class="token class-name">newUser</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    loginId<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    createDate<span class="token operator">:</span> Date
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以：属性全部只读</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UserReadonly</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> <span class="token punctuation">[</span>p <span class="token keyword">in</span> <span class="token keyword">keyof</span> User<span class="token punctuation">]</span><span class="token operator">:</span> User<span class="token punctuation">[</span>p<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于 ⬇️</span>
<span class="token keyword">type</span> <span class="token class-name">UserReadonly</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> loginId<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token keyword">readonly</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token keyword">readonly</span> createDate<span class="token operator">:</span> Date
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以：属性全部可选</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UserPartial</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>p <span class="token keyword">in</span> <span class="token keyword">keyof</span> User<span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> User<span class="token punctuation">[</span>p<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于 ⬇️</span>
<span class="token keyword">type</span> <span class="token class-name">UserPartial</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    loginId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    createDate<span class="token operator">?</span><span class="token operator">:</span> Date
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以：属性全部可选 类型自定义</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MyPartial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>p <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>p<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以：属性全部可选 类型自定义 属性全部只读</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MyReadonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> <span class="token punctuation">[</span>p <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>p<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts中的预设的类型演算" tabindex="-1"><a class="header-anchor" href="#ts中的预设的类型演算" aria-hidden="true">#</a> TS中的预设的类型演算</h2>
<table>
<thead>
<tr>
<th>类型演算</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Partial&lt;T&gt;</code></td>
<td>将类型T中的成员变为可选</td>
</tr>
<tr>
<td><code v-pre>Required&lt;T&gt;</code></td>
<td>将类型T中的成员变为必填</td>
</tr>
<tr>
<td><code v-pre>Readonly&lt;T&gt;</code></td>
<td>将类型T中的成员变为只读</td>
</tr>
<tr>
<td><code v-pre>Exclude&lt;T, U&gt;</code></td>
<td>从T中剔除可以赋值给U的类型</td>
</tr>
<tr>
<td><code v-pre>Extract&lt;T, U&gt;</code></td>
<td>提取T中可以赋值给U的类型</td>
</tr>
<tr>
<td><code v-pre>NonNullable&lt;T&gt;</code></td>
<td>从T中剔除null和undefined</td>
</tr>
<tr>
<td><code v-pre>ReturnType&lt;T&gt;</code></td>
<td>获取函数返回值类型</td>
</tr>
<tr>
<td><code v-pre>InstanceType&lt;T&gt;</code></td>
<td>获取构造函数类型的实例类型</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>-?</code>标识符：去掉可选</p>
<p><code v-pre>inter</code>关键字：推断</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> u1<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>User<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'dadq'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> u2<span class="token operator">:</span> Required<span class="token operator">&lt;</span>User<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'dadq'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> u3<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>User<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'dadq'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token string">"男"</span> <span class="token operator">|</span> <span class="token string">"女"</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>

<span class="token comment">// 此时 NEWT 的类型为 "男" | "女" 的联合类型</span>
<span class="token keyword">let</span> <span class="token constant">NEWT</span><span class="token operator">:</span> Exclude<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token string">"男"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token string">"男"</span> <span class="token operator">|</span> <span class="token string">"女"</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>

<span class="token comment">// 此时 NEWT 的类型为 "男" | "女" 的联合类型</span>
<span class="token keyword">let</span> <span class="token constant">NEWT</span><span class="token operator">:</span> Extract<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token string">"男"</span> <span class="token operator">|</span> <span class="token string">"女"</span> <span class="token operator">|</span> <span class="token string">"a"</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token string">"男"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">str</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>

<span class="token comment">// 此时 strNotEmpty 的类型为 string</span>
<span class="token keyword">type</span> <span class="token class-name">strNotEmpty</span> <span class="token operator">=</span> NonNullable<span class="token operator">&lt;</span>str<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 情况1</span>
<span class="token keyword">type</span> <span class="token class-name">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span>

<span class="token comment">// 得到返回值为 number类型</span>
<span class="token keyword">type</span> <span class="token class-name">returnType</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span>func<span class="token operator">></span>

<span class="token comment">// 情况2</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 此时a的类型为 number类型</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> sum<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下场景：有一个类型<code v-pre>twoParamsConstructor</code>来约束构造函数</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">{</span>
    loginId<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">// 约束一个构造函数：必须满足这个条件：构造函数两个参数(鸭子辨型法：参数可以少)，返回User</span>
<span class="token keyword">type</span> <span class="token class-name">twoParamsConstructor</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> User

<span class="token keyword">let</span> <span class="token constant">A</span><span class="token operator">:</span> twoParamsConstructor <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span> b<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 此时 Inst 类型为 User</span>
<span class="token keyword">type</span> <span class="token class-name">Inst</span> <span class="token operator">=</span> InstanceType<span class="token operator">&lt;</span>twoParamsConstructor<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

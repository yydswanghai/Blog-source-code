<template><div><h1 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象 🎮</h1>
<h2 id="为什么要学面向对象" tabindex="-1"><a class="header-anchor" href="#为什么要学面向对象" aria-hidden="true">#</a> 为什么要学面向对象?</h2>
<ol>
<li>TS为前端面向对象开发带来了契机</li>
</ol>
<p>JS语言没有类型检查，如果使用面向对象的方式开发，会产生大量的接口，而大量的接口会导致调用复杂度剧增，这种复杂度必须通过严格的类型检查来避免错误，尽管可以使用注释或文档或记忆力，但是它们没有强约束力。</p>
<p>TS带来了完整的类型系统，因此开发复杂程序时，无论接口数量有多少，都可以获得完整的类型检查，并且这种检查是具有强约束力的。</p>
<ol start="2">
<li>面向对象中有许多非常成熟的模式，能处理复杂问题</li>
</ol>
<p>在过去的很多年中，在大型应用或复杂领域，面向对象已经积累了非常多的经验。</p>
<h3 id="什么是面向对象" tabindex="-1"><a class="header-anchor" href="#什么是面向对象" aria-hidden="true">#</a> 什么是面向对象?</h3>
<p>面向对象：Oriented (基于) Object (事物)，简称OO。</p>
<p><strong>是一种编程思想，它提出一切以类为切入点思考问题。</strong></p>
<p>其他编程思想：面向过程、函数式编程</p>
<ul>
<li>面向过程：以功能流程为思考切入点，不太适合大型应用</li>
<li>函数式编程：以数学运算为思考切入点</li>
<li>面向对象：以划分类为思考切入点</li>
</ul>
<p>类：可以产生对象的模版</p>
<h2 id="类的继承" tabindex="-1"><a class="header-anchor" href="#类的继承" aria-hidden="true">#</a> 类的继承</h2>
<h3 id="继承的作用" tabindex="-1"><a class="header-anchor" href="#继承的作用" aria-hidden="true">#</a> 继承的作用</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>继承可以描述类与类之间的关系</strong></p>
<p>如果A和B都是类，并且可以描述为A是B，则A和B形成继承关系：</p>
<ul>
<li>B是父类，A是子类</li>
<li>B派生A，A继承自B</li>
<li>B是A的基类，A是B的派生类</li>
</ul>
<p>如果A继承自B，则A中自动拥有B中的所有成员</p>
</div>
<ul>
<li>
<p>例如：坦克、玩家坦克、敌方坦克</p>
</li>
<li>
<p>玩家坦克是坦克，敌方坦克是坦克</p>
</li>
</ul>
<h3 id="成员的重写" tabindex="-1"><a class="header-anchor" href="#成员的重写" aria-hidden="true">#</a> 成员的重写</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>重写(override)</strong>：子类中覆盖父类的成员</p>
<p>无论是属性还是方法，子类都可以对父类的相应成员进行重写，但是重写时，需要保证类型的匹配。因为<strong>子类成员不能改变父类成员的类型</strong></p>
<p><strong>super关键字</strong>：在子类的方法中，可以使用super关键字读取父类成员</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>this关键字：在继承关系中，this的指向是动态 —— 调用方法时，根据具体的调用者确定this指向</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Tank</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"坦克"</span>
    <span class="token function">shoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"发射子弹"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我是一个</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PlayerTank</span> <span class="token keyword">extends</span> <span class="token class-name">Tank</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"玩家坦克"</span>
    <span class="token function">shoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"玩家坦克发射子弹"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"啦啦啦"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 调用父类的方法</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 因为重写了 sayHello 所以this调用的是自己的方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">EnemyTank</span> <span class="token keyword">extends</span> <span class="token class-name">Tank</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"敌方坦克"</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PlayerTank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>x<span class="token punctuation">,</span> p<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 20 20</span>
p<span class="token punctuation">.</span><span class="token function">shoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 玩家坦克发射子弹</span>
p<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 我是一个玩家坦克</span>
p<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 我是一个玩家坦克</span>
<span class="token comment">// 啦啦啦</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型匹配" tabindex="-1"><a class="header-anchor" href="#类型匹配" aria-hidden="true">#</a> 类型匹配</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>鸭子辨型法</p>
<p>子类的对象，始终可以赋值给父类</p>
<p>面向对象中，这种现象，叫做<strong>里氏替换原则</strong></p>
<p>如果需要判断一个数据的具体子类类型，可以使用<code v-pre>instanceof</code></p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Tank</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PlayerTank</span> <span class="token keyword">extends</span> <span class="token class-name">Tank</span> <span class="token punctuation">{</span>
    life<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">EnemyTank</span> <span class="token keyword">extends</span> <span class="token class-name">Tank</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">let</span> p<span class="token operator">:</span> Tank <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PlayerTank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// PlayerTank类型可以赋值给Tank类型，p的真实值为PlayerTank类型</span>

<span class="token comment">// p.life</span>
<span class="token comment">// 这里使用不了，因为现在p的类型是Tank，因为ts不能确定p一定是 PlayerTank 类型</span>
<span class="token comment">// 可以你后面还会给p重新赋值为其他类型比如`p = new EnemyTank();`</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token keyword">instanceof</span> <span class="token class-name">PlayerTank</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// 触发类型保护，在if内确定了p为PlayerTank类型</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>life<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 5</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="protected修饰符" tabindex="-1"><a class="header-anchor" href="#protected修饰符" aria-hidden="true">#</a> protected修饰符</h3>
<table>
<thead>
<tr>
<th>修饰符</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>readonly</td>
<td>只读修饰符</td>
</tr>
<tr>
<td><strong>访问权限修饰符</strong></td>
<td><strong>含义</strong></td>
</tr>
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
<td>受保护的成员，只能在自身和子类中访问</td>
</tr>
</tbody>
</table>
<h3 id="单根性和传递性" tabindex="-1"><a class="header-anchor" href="#单根性和传递性" aria-hidden="true">#</a> 单根性和传递性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>单根性</strong>：每个类最多只能拥有一个父类</p>
<p><strong>传递性</strong>：如果A是B的父类，并且B是C的父类，则可以认为A也是C的父类</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Tank</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"坦克"</span>
    <span class="token function">shoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"发射子弹"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PlayerTank</span> <span class="token keyword">extends</span> <span class="token class-name">Tank</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"玩家坦克"</span>
    <span class="token function">shoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"玩家坦克发射子弹"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">EnemyTank</span> <span class="token keyword">extends</span> <span class="token class-name">Tank</span> <span class="token punctuation">{</span>
    health<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BossTank</span> <span class="token keyword">extends</span> <span class="token class-name">EnemyTank</span> <span class="token punctuation">{</span>
    <span class="token comment">// 即拥有 EnemyTank 类的全部成员 也拥有 Tank类的全部成员</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BossTank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h2>
<h3 id="为什么需要抽象类" tabindex="-1"><a class="header-anchor" href="#为什么需要抽象类" aria-hidden="true">#</a> 为什么需要抽象类?</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>有时，某个类只表示一个抽象概念，主要用于提取子类共有的成员，而不能直接创建它的对象。该类可以作为抽象类。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Chess</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="抽象成员" tabindex="-1"><a class="header-anchor" href="#抽象成员" aria-hidden="true">#</a> 抽象成员</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>父类中，可能知道有些成员是必须存在的，但是不知道该成员的值或实现是什么，因此，需要有一种强约束，让继承该类的子类，必须要实现该成员。</p>
<p><strong>抽象类中</strong>，可以有抽象成员，这些抽象成员必须在子类中实现</p>
</div>
<h3 id="设计模式-模板模式" tabindex="-1"><a class="header-anchor" href="#设计模式-模板模式" aria-hidden="true">#</a> 设计模式 - 模板模式</h3>
<p><strong>设计模式</strong>：对面一些常见的功能场景，有一些固定的、经过多年实践的成熟方法，这些方法称之为设计模式。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>模板模式</strong>：有些方法，所有的子类实现的流程完全一致，只是流程中的某个步骤的具体实现不一致，可以将该方法提取到父类，在父类中完成整个流程的实现，遇到实现不一致的方法时，将该方法做成抽象方法。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Chess</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// 棋子名</span>
    <span class="token keyword">abstract</span> <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token comment">// 棋子移动规则</span>
    <span class="token function">move</span><span class="token punctuation">(</span>targetX<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> targetY<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1. 边界判断'</span><span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'2. 目标位置是否有己方棋子'</span><span class="token punctuation">)</span>
        <span class="token comment">// 3. 棋子移动规则判断</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span>targetX<span class="token punctuation">,</span> targetY<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> targetX<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> targetY<span class="token punctuation">;</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">移动成功</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token function">rule</span><span class="token punctuation">(</span>targetX<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> targetY<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Horse</span> <span class="token keyword">extends</span> <span class="token class-name">Chess</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方式一</span>
    <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'马'</span>
    <span class="token keyword">protected</span> <span class="token function">rule</span><span class="token punctuation">(</span>targetX<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> targetY<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cannon</span> <span class="token keyword">extends</span> <span class="token class-name">Chess</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方式二</span>
    <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'炮'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token function">rule</span><span class="token punctuation">(</span>targetX<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> targetY<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Soldier</span> <span class="token keyword">extends</span> <span class="token class-name">Chess</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方式三：没有写set就不能更改了</span>
    <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'兵'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token function">rule</span><span class="token punctuation">(</span>targetX<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> targetY<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Horse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cannon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Soldier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// const ch = new Chess();// 无法创建抽象类的实例</span>
h<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态成员" tabindex="-1"><a class="header-anchor" href="#静态成员" aria-hidden="true">#</a> 静态成员</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>静态成员</strong>是指，附着在类上的成员 (属于某个构造函数的成员)</p>
<p>使用<code v-pre>static</code>修饰的成员，是静态成员</p>
<p><strong>实例成员</strong>：对象成员，属于某个类的对象</p>
<p><strong>静态成员</strong>：非实例成员，属于某个类</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> users<span class="token operator">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>
        <span class="token keyword">public</span> loginId<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
        <span class="token keyword">public</span> loginPwd<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 需要将新建的用户加入到数组中</span>
        <span class="token comment">// this就是当前新创建的对象</span>
        User<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">I am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, my age is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 静态方法login中的this指向 User</span>
    <span class="token keyword">static</span> <span class="token function">login</span><span class="token punctuation">(</span>loginId<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> loginPwd<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> User <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>u <span class="token operator">=></span> u<span class="token punctuation">.</span>loginId <span class="token operator">===</span> loginId <span class="token operator">&amp;&amp;</span> u<span class="token punctuation">.</span>loginPwd <span class="token operator">===</span> loginPwd<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">'u1'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">,</span> <span class="token string">'王富贵'</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> u2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">'u2'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">,</span> <span class="token string">'坤坤'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> u3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">'u3'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">,</span> <span class="token string">'老六'</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> User<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token string">'u2'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// I am 坤坤, my age is 18</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'登录失败，账号或密码错误'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态方法中的this" tabindex="-1"><a class="header-anchor" href="#静态方法中的this" aria-hidden="true">#</a> 静态方法中的this</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>实例方法中的this指向的是<strong>当前对象</strong></li>
<li>而静态方法中的this指向的是<strong>当前类</strong></li>
</ul>
</div>
<h3 id="设计模式-单例模式" tabindex="-1"><a class="header-anchor" href="#设计模式-单例模式" aria-hidden="true">#</a> 设计模式 - 单例模式</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>单例模式</strong>：某些类的对象，在系统中最多只能有一个，为了避免开发者造成随意创建多个类对象的错误，可以使用单例模式进行强约束。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Board</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">500</span>
    height<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">700</span>

    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"初始化棋盘"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 构造函数私有化就不能用new了</span>
    <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 唯一棋盘对象</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> _board<span class="token operator">?</span><span class="token operator">:</span> Board
    <span class="token comment">// 创建</span>
    <span class="token keyword">static</span> <span class="token function">createBoard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Board <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_board<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_board<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_board <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Board</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_board<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> Board<span class="token punctuation">.</span><span class="token function">createBoard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> Board<span class="token punctuation">.</span><span class="token function">createBoard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b <span class="token operator">===</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="再谈接口" tabindex="-1"><a class="header-anchor" href="#再谈接口" aria-hidden="true">#</a> 再谈接口</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>接口用于约束类、对象、函数的契约 (标准)</p>
<p>面向对象领域中的接口的语义：表达了某个类是否拥有某种能力</p>
<p>某个类具有某种能力，其实就是实现了某种接口</p>
</div>
<p>不使用接口实现时：</p>
<ul>
<li>对能力 (成员函数) 没有强约束力</li>
<li>容易将类型和能力耦合在一起</li>
</ul>
<p>系统中缺少对能力的定义 -&gt; 接口</p>
<h3 id="类型保护函数" tabindex="-1"><a class="header-anchor" href="#类型保护函数" aria-hidden="true">#</a> 类型保护函数</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>通过调用该函数，会触发TS的类型保护，该函数必须返回<code v-pre>boolea</code></p>
<p>接口和类型别名的最大区别：接口可以被类实现，而类型别名不可以</p>
</div>
<p>例子：有一个马戏团，马戏团中有很多动物，包括：狮子、老虎、猴子、狗，这些动物都具有共同的特征：名字、年龄、种类名称，还包含一个共同的方法：打招呼，它们各自有各自的技能，技能是可以通过训练改变的。狮子和老虎能进行火圈表演，猴子能进行平衡表演，狗能进行智慧表演。</p>
<p>马戏团中有以下常见技能：</p>
<ul>
<li>火圈表演：单火圈、双火圈</li>
<li>平衡表演：独木桥、走钢丝</li>
<li>智慧表演：算术题、跳舞</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> type<span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>
        <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        各位观众，大家好！
        我是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">，
        我叫</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">，
        今年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 能力</span>
<span class="token keyword">interface</span> <span class="token class-name">IFireShow</span> <span class="token punctuation">{</span>
    <span class="token function">singleFire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token function">doubleFire</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IBalanceShow</span> <span class="token punctuation">{</span>
    <span class="token function">singlePlankBridge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token function">wireWalking</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IWisdomShow</span> <span class="token punctuation">{</span>
    <span class="token function">doArithmetic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Lion</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">IFireShow</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"狮子"</span>

    <span class="token function">singleFire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">表演单火圈</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">doubleFire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">表演双火圈</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Tiger</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">IFireShow</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"老虎"</span>

    <span class="token function">singleFire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">表演单火圈</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">doubleFire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">表演双火圈</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Monkey</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">IBalanceShow</span><span class="token punctuation">,</span> IFireShow <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"猴子"</span>

    <span class="token function">singlePlankBridge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">表演走独木桥</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">wireWalking</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">表演走钢丝</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">singleFire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">表演单火圈</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">doubleFire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">表演双火圈</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">IWisdomShow</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"狗"</span>

    <span class="token function">doArithmetic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">表演做算术题</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">表演跳舞</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> animals<span class="token operator">:</span> Animal<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">Lion</span><span class="token punctuation">(</span><span class="token string">"王富贵"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Tiger</span><span class="token punctuation">(</span><span class="token string">"坤坤"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Monkey</span><span class="token punctuation">(</span><span class="token string">"老六"</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">"汪汪"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
<span class="token comment">// 1. 让所有动物打招呼</span>
animals<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>a <span class="token operator">=></span> a<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 所有会火圈表演的动物，完成火圈表演</span>

<span class="token comment">// 类型保护函数：帮助ts判断 ani是否具有某种能力(IFireShow)</span>
<span class="token keyword">function</span> <span class="token function">hasFireShow</span><span class="token punctuation">(</span>ani<span class="token operator">:</span> object<span class="token punctuation">)</span><span class="token operator">:</span> ani <span class="token keyword">is</span> IFireShow <span class="token punctuation">{</span>
    <span class="token comment">// 因为ts不支持这样判断 `ani(对象) instanceof IFireShow(接口在运行时不存在)`</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>ani <span class="token keyword">as</span> IFireShow<span class="token punctuation">)</span><span class="token punctuation">.</span>singleFire  <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>ani <span class="token keyword">as</span> IFireShow<span class="token punctuation">)</span><span class="token punctuation">.</span>doubleFire
    <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
animals<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>a <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断当前对象是否有某种能力</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">hasFireShow</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a<span class="token punctuation">.</span><span class="token function">singleFire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">doubleFire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 所有会智慧表演的动物，完成智慧表演</span>

<span class="token keyword">function</span> <span class="token function">hasWisdomShow</span><span class="token punctuation">(</span>ani<span class="token operator">:</span> object<span class="token punctuation">)</span><span class="token operator">:</span> ani <span class="token keyword">is</span> IWisdomShow <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>ani <span class="token keyword">as</span> IWisdomShow<span class="token punctuation">)</span><span class="token punctuation">.</span>doArithmetic  <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>ani <span class="token keyword">as</span> IWisdomShow<span class="token punctuation">)</span><span class="token punctuation">.</span>dance
    <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
animals<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>a <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">hasWisdomShow</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a<span class="token punctuation">.</span><span class="token function">doArithmetic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接口可以继承类" tabindex="-1"><a class="header-anchor" href="#接口可以继承类" aria-hidden="true">#</a> 接口可以继承类</h4>
<p>表示该类的所有成员都在接口中</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    a1<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">''</span>
    a2<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">''</span>
    a3<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">''</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    b1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
    b2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
    b3<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">,</span> <span class="token constant">B</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> c<span class="token operator">:</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token punctuation">{</span> a1<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> a2<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> a3<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> b1<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> b2<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> b3<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引器" tabindex="-1"><a class="header-anchor" href="#索引器" aria-hidden="true">#</a> 索引器</h2>
<p>以前在js里叫这个为<strong>成员表达式</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>对象<span class="token punctuation">[</span>值<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在TS中，默认情况下，不对索引器 (成员表达式) 做严格的类型检查</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>
        <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span><span class="token string">'pid'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里不做严格的类型检查是因为ts不确定你这里算出来的值是多少，可能你这个<code v-pre>u[]</code>里面的结果来源于某个表达式或函数调用结果。</p>
<p>而<code v-pre>u.pid</code>调用的时候有严格的类型检查是因为，这里ts认为你是确定你一定要读<code v-pre>pid</code>这个属性。</p>
<p><code v-pre>tsconfig.json</code>配置开启对隐式any的检查</p>
<p>隐式any：TS根据实际情况推导出的any类型</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>在索引器中，键的类型可以是字符串，也可以是数字</p>
<p>在类中，索引器书写的位置应该是所有成员之前</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>
        <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span><span class="token string">'pid'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 严格检查下，添加索引器就不在报错了</span>

<span class="token keyword">class</span> <span class="token class-name">MyArray</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token number">0</span> <span class="token operator">=</span> <span class="token string">'1'</span>
    <span class="token number">1</span> <span class="token operator">=</span> <span class="token string">'adds'</span>
    <span class="token number">2</span> <span class="token operator">=</span> <span class="token string">'Beqwt'</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> my <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
my<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"5555"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>TS中索引器的作用</strong></p>
<ol>
<li>在严格的检查下，可以实现为类动态增加成员</li>
<li>可以实现动态的操作类成员</li>
</ol>
<p>在JS中，所有的成员名本质上，都是字符串，如果使用数字作为成员名，会自动转换为字符串</p>
<p>可以加多个索引器，在TS中，如果某个类中使用了两种类型的索引器，要求两种索引器的值必须匹配</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">B</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> object
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this指向约束" tabindex="-1"><a class="header-anchor" href="#this指向约束" aria-hidden="true">#</a> this指向约束</h2>
<p><code v-pre>tsconfig.json</code>配置如下：表示不允许this隐式的指向any</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"noImplicitThis"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在TS中，允许在书写函数时，手动声明该函数中this的指向，将this作为函数的第一个参数，该参数只用于约束this，并不是真正的参数，也不会出现在编译结果中。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IUser</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> IUser<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u<span class="token operator">:</span> IUser <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"ssdf"</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> say <span class="token operator">=</span> u<span class="token punctuation">.</span>sayHello<span class="token punctuation">;</span>
<span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 报错："this" 上下文不能分配给类型为“IUser”的方法的</span>

<span class="token comment">// 在类中</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>
        <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> User<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">'dad'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> say <span class="token operator">=</span> u<span class="token punctuation">.</span>sayHello<span class="token punctuation">;</span>
<span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 报错："this" 上下文不能分配给类型为“IUser”的方法的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

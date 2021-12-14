const path = require('path');
module.exports = {
    title: 'Hello VuePress',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/public/cat.svg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [
            {text: '主页', link: '/' },
            {   
                text: 'page', 
                items: [
                    {text: 'pageindex', link: '/page/'},
                    {text: 'pagetest', link: '/page/test.md'},
                ]
            },
        ],
        sidebar: 'auto', 
        sidebarDepth: 6,
    }
}
module.exports = {
    title: 'Hello',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/svgs/site-icon.svg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [
            {   
                text: '断墨寻径', 
                items: [
                    {text: '概述', link: '/page/routing/'},
                    {text: '第一篇', link: '/page/routing/r-01.md'},
                    {text: '第二篇', link: '/page/routing/r-02.md'},
                    {text: '第三篇', link: '/page/routing/r-03.md'},
                    {text: '第四篇', link: '/page/routing/r-04.md'},
                    {text: '第五篇', link: '/page/routing/r-05.md'},
                    {text: '第六篇', link: '/page/routing/r-06.md'},
                    {text: '第七篇', link: '/page/routing/r-07.md'},
                ]
            },
        ],
        sidebar: {
            '/page/routing/': [
                {
                    title: '寻径',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '',
                        'r-01',
                        'r-02',
                        'r-03',
                        'r-04',
                        'r-05',
                        'r-06',
                        'r-07',
                    ]
                }
            ] 
        },
    }
}
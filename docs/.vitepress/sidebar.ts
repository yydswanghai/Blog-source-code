import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/page/':[
        {
            text: '指南',
            items: [
                { text: '搭建ts开发环境 🌟', link: '/page/tsbook-01' },
                { text: '基本类型检查 💯', link: '/page/tsbook-02' },
                { text: '其他常用类型 🌈', link: '/page/tsbook-03' },
                { text: '函数相关的约束 💫', link: '/page/tsbook-04' },
                { text: '类型别名 type 🌎', link: '/page/tsbook-05' },
                { text: '枚举 🏖️', link: '/page/tsbook-06' },
                { text: '模块化 🎉', link: '/page/tsbook-07' },
                { text: '接口 🎊', link: '/page/tsbook-08' },
                { text: '泛型 🎁', link: '/page/tsbook-09' },
                { text: 'TS中的类 🎗️', link: '/page/tsbook-10' },
                { text: '类型兼容性 🎯', link: '/page/tsbook-11' },
                { text: '面向对象 🎮', link: '/page/tsbook-12' },
                { text: '装饰器 🖼️', link: '/page/tsbook-13' },
                { text: '类型演算 🎶', link: '/page/tsbook-14' },
                { text: '声明文件 📂', link: '/page/tsbook-15' },
                { text: 'tsconfig常用配置 🏆', link: '/page/tsbook-16' },
            ]
        }
    ]
}
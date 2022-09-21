import { defineConfig } from "vitepress"
import { sidebar } from "./sidebar"

export default defineConfig({
    lang: 'zh-CN',
    title: 'ts手册',
    description: '这是一个typescript手册',
    appearance: true,// 暗黑模式
    head: [
        ['link', { rel: 'icon', href: '/svgs/site-icon.svg' }]
    ],
    lastUpdated: true,// 最后更新时间
    themeConfig: {// 主题配置
        logo: '/imgs/logo.gif',
        siteTitle: 'hello',
        sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/yydswanghai/doc730-ts' }
        ],
        footer: {
            copyright: 'MIT Licensed | Copyright © 2022-present w'
        },
        outlineTitle: '在本页面',
        lastUpdatedText: '最后更新',
    },
    outDir: 'dist/'
})
import { defineUserConfig, defaultTheme } from "vuepress"
import { sidebar } from "./sidebar"
import { searchPlugin } from "@vuepress/plugin-search"

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'ts手册',
    description: '这是一个typescript小手册',
    head: [
        ['link', { rel: 'icon', href: '/svgs/site-icon.svg' }]
    ],
    theme: defaultTheme({
        colorModeSwitch: true,
        logo: '/imgs/logo.gif',
        logoDark: '/imgs/logoDark.gif',
        repo: 'https://github.com/yydswanghai/code730-document',
        sidebar: sidebar,
        sidebarDepth: 3,
        lastUpdated: true,
        tip: 'TIP',
        warning: '注意',
        danger: 'DANGER',
    }),
    plugins: [
        searchPlugin({
            maxSuggestions: 6,
            hotKeys: ['s', '/'],
        })
    ]
})
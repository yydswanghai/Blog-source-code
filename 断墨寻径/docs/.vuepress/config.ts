import { defineUserConfig, defaultTheme } from "vuepress"
import { sidebar } from "./sidebar";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Hello',
    description: '我的个人网站',
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
    })
})
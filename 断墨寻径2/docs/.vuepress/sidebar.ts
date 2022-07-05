import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
    '/page/': [
        {
            text: '指南',
            children: [
                '/page/book-01.md',
                '/page/book-02.md',
                '/page/book-03.md',
                '/page/book-04.md',
                '/page/book-05.md',
                '/page/book-06.md',
                '/page/book-07.md',
                '/page/book-08.md',
                '/page/book-09.md'
            ]
        },
    ],
}
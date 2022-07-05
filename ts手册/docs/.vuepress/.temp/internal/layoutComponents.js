import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/liangjiayin/Desktop/code/my_projects/code730-document/ts手册/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/liangjiayin/Desktop/code/my_projects/code730-document/ts手册/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}

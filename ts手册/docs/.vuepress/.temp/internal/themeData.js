export const themeData = JSON.parse("{\"colorModeSwitch\":true,\"logo\":\"/imgs/logo.gif\",\"logoDark\":\"/imgs/logoDark.gif\",\"repo\":\"https://github.com/yydswanghai/code730-document\",\"sidebar\":{\"/page/\":[{\"text\":\"指南\",\"children\":[\"/page/tsbook-01.md\",\"/page/tsbook-02.md\",\"/page/tsbook-03.md\",\"/page/tsbook-04.md\",\"/page/tsbook-05.md\",\"/page/tsbook-06.md\",\"/page/tsbook-07.md\",\"/page/tsbook-08.md\",\"/page/tsbook-09.md\",\"/page/tsbook-10.md\",\"/page/tsbook-11.md\",\"/page/tsbook-12.md\",\"/page/tsbook-13.md\",\"/page/tsbook-14.md\",\"/page/tsbook-15.md\",\"/page/tsbook-16.md\"]}]},\"sidebarDepth\":3,\"lastUpdated\":true,\"tip\":\"TIP\",\"warning\":\"注意\",\"danger\":\"DANGER\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

export const themeData = JSON.parse("{\"colorModeSwitch\":true,\"logo\":\"/imgs/logo.gif\",\"logoDark\":\"/imgs/logoDark.gif\",\"repo\":\"https://github.com/yydswanghai/code730-document\",\"sidebar\":{\"/page/\":[{\"text\":\"指南\",\"children\":[\"/page/book-01.md\",\"/page/book-02.md\",\"/page/book-03.md\",\"/page/book-04.md\",\"/page/book-05.md\",\"/page/book-06.md\",\"/page/book-07.md\",\"/page/book-08.md\",\"/page/book-09.md\"]}]},\"sidebarDepth\":3,\"lastUpdated\":true,\"tip\":\"TIP\",\"warning\":\"注意\",\"danger\":\"DANGER\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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

import comp from "/workspace/code-dev/vuepress-blog/src/.vuepress/.temp/pages/star/index.html.vue"
const data = JSON.parse("{\"path\":\"/star/\",\"title\":\"星标\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"星标\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"type\",\"key\":\"star\"},\"layout\":\"BlogType\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.sixmillions.cn/vuepress2-blog/star/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"星标\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"sixmillions\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"星标\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

import { defineConfig } from 'vitepress'
import * as pageConfig from './configs'
import { generateSitemap, rebuildPWA } from './build'

export default defineConfig({
  base: pageConfig.base,
  head: pageConfig.head,
  locales: pageConfig.locales,

  markdown: pageConfig.markdownConfig,
  themeConfig: pageConfig.themeConfig,
  lastUpdated: true,

  buildEnd: async () => {
    await generateSitemap()
    await rebuildPWA()
  },
})

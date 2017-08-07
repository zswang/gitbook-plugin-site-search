'use strict'

module.exports = {
  website: {
    assets: './assets',
    js: [
      'site-search.js'
    ]
  },

  hooks: {
    page(page) {
      const defaults = {
        url: 'https://www.baidu.com/s?wd=',
      }
      const pluginConfig = this.config.get('pluginsConfig')['site-search']
      const options = Object.assign({}, defaults, pluginConfig)

      const url = options.url
      const site = options.site

      page.content = `${page.content}<script>gitbookSiteSearchConfig = ${JSON.stringify({ url: url, site: site })}</script>`

      return page
    }
  }
}

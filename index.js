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
        url: 'https://baidu.com/s?wd=',
      }
      const pluginConfig = this.config.get('pluginsConfig')['site-search']
      const options = Object.assign({}, defaults, pluginConfig)

      const url = options.url
      const site = options.site

      page.content = `<script>gitbookSiteSearchConfig = ${JSON.stringify({ url: url, site: site })}</script>` + page.content

      return page;
    }
  }
}

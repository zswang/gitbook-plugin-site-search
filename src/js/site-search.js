require([
  'gitbook',
  'jquery'
], function (gitbook, $) {
  gitbook.events.on('page.change', function () {
    $('#book-search-input input').keypress(function (e) {
      if (typeof gitbookSiteSearchConfig === 'undefined') {
        return;
      }
      if (e.which !== 13) {
        return;
      }
      var q = $(this).val().trim();
      if (q) {
        // gitbookSiteSearchConfig = {
        //   url: 'https://www.baidu.com/s?wd=',
        //   site: 'site:sensorsdata.cn manaul',
        // }
        gitbookSiteSearchConfig.site = gitbookSiteSearchConfig.site || 'site:' + location.hostname;
        var url = gitbookSiteSearchConfig.url + encodeURIComponent(q + ' ' + gitbookSiteSearchConfig.site);
        window.open(url);
      }
    });
  });

});

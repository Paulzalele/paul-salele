module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-matomo/gatsby-browser.js'),
      options: {"plugins":[],"siteId":"1","matomoUrl":"https://paulsalele.matomo.cloud/","siteUrl":"https://paulsalele.com"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Paul Salele","short_name":"Paul Salele","start_url":"https://paulsalele.com","background_color":"#663399","theme_color":"#663399","display":"standalone","icon":"src/images/phoenix-512px.png","crossOrigin":"use-credentials","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","include_favicon":true,"cacheDigest":"a8a16615796efe938e80952c4b206c1c"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

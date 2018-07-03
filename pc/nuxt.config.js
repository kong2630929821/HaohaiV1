const axios = require('axios')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'GAIA.WORLD-The creator of game blockchain',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no' },
      { name:"keywords", content:"GAIAWORLD,GAIAWORLD区块链,GAIA币,gaia官网,超级侧链,游戏公链,区块链,盖亚"},
      { hid: 'description', name: 'description', content: 'GAIA.WORLD是基于全新构架的第三代区块链体系，我们试图建立一套去中心的、自由和稳定的全新互联网信任体系，并重点解决区块链应用开发中以游戏等强交互应用为典型代表的泛娱乐领域的开发痛点，推进区块链技术面向普通大众的普及和推广应用。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios'],
    postcss: [
      require('postcss-px-to-viewport')({
        viewportWidth: 1800, // (Number) The width of the viewport.  
        unitPrecision: 5, // (Number) The decimal numbers to allow the REM units to grow to. 
        viewportUnit: 'vw', // (String) Expected units. 
        selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
        mediaQuery: false // (Boolean) Allow px to be converted in media queries.
      })
    ],
  },
  plugins:['~/plugins/vue-i18n'],
  css: [
    '~/css/style.css'
  ],
  router: {
    base: '/pc/',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  generate: {
    routes: function () {
      return axios.get('/newsConfig.json')
      .then((res) => {
        return res.data.map((item) => {
          return '/news/' + item.id
        })
      })      
    }
  }
}

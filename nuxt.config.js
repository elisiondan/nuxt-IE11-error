const resolve = require('path').resolve; // eslint-disable-line prefer-destructuring

const isVueRule = (rule) => rule.test.toString() === '/\\.vue$/';
const isSASSRule = (rule) => ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1;
const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      resolve(__dirname, 'assets/style/_variables.scss'),
      resolve(__dirname, 'assets/style/_svg-icons.scss'),
      resolve(__dirname, 'assets/style/_animations.scss'),
      resolve(__dirname, 'assets/style/lib/shevy/_variables.scss'),
      resolve(__dirname, 'assets/style/lib/shevy/_functions.scss'),
      resolve(__dirname, 'assets/style/lib/shevy/_mixins.scss'),
    ],
  },
};

module.exports = {
  /*
  ** Headers of the page
  */
 env: {
  API_URL: 'https://directus.elisiondesign.cz/api/1.1/',
  API_KEY: 'rApF7oeJnCLGpMsmdf0mzTjkOl5twipi',
},
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
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
   vendor: ['babel-polyfill', 'event-source-polyfill'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

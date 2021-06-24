// const CompressionPlugin = require('compression-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const vConsolePlugin = require('vconsole-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const vuxLoader = require('vux-loader');
const path = require('path')
// const argv = require('yargs').argv

function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/h5' : '/jicaih5web', // 打包目录
  outputDir: 'dist',
  assetsDir: 'public',
  indexPath: 'index.html',
  filenameHashing: true,
  runtimeCompiler: true,
  transpileDependencies: [],
  productionSourceMap: !process.env.VUE_CLI_TEST,
  parallel: (function () {
    try {
      return require('os').cpus().length > 1
    } catch (e) {
      return false
    }
  })(),
  pages: undefined,
  crossorigin: undefined,
  integrity: false,
  css: {
    loaderOptions: {
      // css: {
      //   extract: process.env.NODE_ENV === 'production',
      //   modules: false,
      //   localIdentName: '[name]_[local]_[hash:base64:5]',
      //   sourceMap: true,
      //   loaderOptions: {},
      // },

      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 100,
            unitPrecision: 5,
            propWhiteList: [],
            propBlackList: [],
            exclude: /(node_module)/,
            selectorBlackList: [],
            ignoreIdentifier: false,
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
          }),
        ],
      },
    },
  },
  lintOnSave: false,
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8888,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    proxy: null,
    before: (app) => {},
  },
  // pwa: {
  //   name: '',
  //   themeColor: '#FD5F56'
  // },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg-icon'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg-icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }

  // chainWebpack: (config) => {
  /* const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    function addStyleResource (rule) {
      rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
          preProcessor: 'less',
          patterns: [
            resolve('src/style/theme.less'),
          ],
        })
    } */

  // config.resolve.alias
  //   .set('@assets', resolve('src/assets'))
  //   .set('@components', resolve('src/components'))
  //   .set('@store', resolve('src/store'))
  //   .set('@router', resolve('src/router'))
  //   .set('@utils', resolve('src/utils'))
  //   .set('@mixins', resolve('src/mixins'))
  //   .set('@plugins', resolve('src/plugins'))
  //   .set('@directives', resolve('src/directives'))
  //   .set('@filters', resolve('src/filters'))
  //   .end()
  // },

  // configureWebpack: (config) => {
  // if (process.env.NODE_ENV !== 'production') {
  //   config.plugins.push(new vConsolePlugin({
  //     enable: true
  //   }))
  // }

  // config.plugins.push(
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: 'index.html',
  //     inject: true,
  //   })
  // )

  // if (process.env.NODE_ENV === 'production') {
  //   config.plugins.push(
  //     new CompressionPlugin({
  //       filename: '[path].gz[query]',
  //       algorithm: 'gzip',
  //       test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\/svg?.+$/,
  //       threshold: 8192,
  //       minRatio: 0.8,
  //     })
  //   )

  //   config.plugins.push(
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         compress: {
  //           warnings: false,
  //           drop_console: true,
  //           drop_debugger: true,
  //           pure_funcs: ['console.log'],
  //         },
  //         sourceMap: true,
  //         parallel: true,
  //       },
  //     })
  //   )
  // }
  // },
}

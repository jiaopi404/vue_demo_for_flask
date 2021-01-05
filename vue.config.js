/*
 * @Description: vue project config for cli3
 * @Author: bayesba
 * @Date: 2019-02-13 14:07:26
 * @LastEditTime: 2019-07-06 10:08:34
 * @LastEditors: Please set LastEditors
 */

module.exports = {
  // chainWebpack:  config => {
  //   config
  //   .entry('index')
  //     .add('babel-polyfill')
  // },
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 9001,
    https: false,
    hotOnly: false,
    proxy: {
      '/express': {
        // target: 'http://192.168.1.120:8093/',
        target: 'http://122.51.19.128:8099/',
        ws: true,
        changeOrigin: true
      },
      '/template': {
        target: 'http://47.93.35.179:8022/',
        ws: true,
        changeOrigin: true
      },
      '/api-v1': {
        target: 'http://localhost:18081/',
        ws: true,
        changeOrigin: true
      }
      // '/api/user': {
      //   target: 'http://47.93.35.179:8020/',
      //   ws: true,
      //   changeOrigin: true
      // }
    }
  },
  productionSourceMap: false
}

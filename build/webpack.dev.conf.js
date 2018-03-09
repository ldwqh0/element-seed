process.env.NODE_ENV = 'development' //定义为开发环境
const merge = require('webpack-merge')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')
const config = require('../config')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const devWebpackConfig = merge(baseWebpackConfig, {
  output: {
    path: config.build.assetsRoot,//输出根文件夹
    publicPath: config.dev.assetsPublicPath,//发布路径
    filename: '[name].js?'//输出文件命名规则
  },
  mode: 'development',//模式
  devtool: config.dev.devtool,
  devServer: {
    hot: true,
    contentBase: false,
    publicPath: config.dev.assetsPublicPath,
    overlay: config.dev.errorOverlay
      ? {warnings: false, errors: true}
      : false,
    host: config.dev.host,
    port: config.dev.port,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
  },
  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('index.html'),
      inject: true
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  // 使用portfinder坚持可用的端口
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})

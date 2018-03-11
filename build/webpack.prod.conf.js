process.env.NODE_ENV = 'production'
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
  output: {
    path: config.build.assetsRoot,//输出文件夹
    publicPath: config.build.assetsPublicPath,// 发布路径
    filename: '[name].[chunkhash].js?'//输出文件命名规则
  },
  mode: process.env.NODE_ENV,//模式
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  optimization: {
    minimize: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all' //代码切分
    },
    minimizer: [
      // 对js文件进行压缩
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        uglifyOptions: {
          sourceMap: true,
          mangle: false //
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: utils.resolve('index.html'),
      inject: true,
      minify: {
        removeComments: true,//移除注释
        collapseWhitespace: true, //合并多余空格
        removeAttributeQuotes: true//移除分号
        // 更多选项请参见:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      // chunksSortMode: 'dependency'
    }),
    new MiniCssExtractPlugin({
      path: utils.assetsPath('css'),
      filename: '[name].[chunkhash].css',
      chunkFilename: utils.assetsPath('css/[id].[chunkhash].css')
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    // 复制静态资源到目录中
    new CopyWebpackPlugin([
      {
        from: utils.resolve('static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

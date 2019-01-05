'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')
const utils = require('./utils')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',//模式
  output: {
    path: config.build.assetsRoot,//输出文件夹
    publicPath: config.build.assetsPublicPath,// 发布路径,可以是/ 或者是http://yourdomain/的形式
    filename: utils.assetsPath('js/[name].js?_=[chunkhash]'),//输出文件命名规则，使用查询参数解决缓存问题
    chunkFilename: utils.assetsPath('js/[id].js?_=[chunkhash]')
  },
  optimization: {
    minimize: true,
    runtimeChunk: true,
    noEmitOnErrors: true,
    splitChunks: { // 模块分割的选项，
      cacheGroups: {
        // 此处的配置将所有的样式文件合并为一个文件
        styles: {
          name: 'styles',
          test: /\.(scss|vue|css|less)$/,
          chunks: 'all',
          enforce: true,
          minChunks: 1
        }
      },
      chunks: 'all',
      // minSize: 30000, //默认只有当模块大小大于30Kb的时候才会启用模块分割，可以通过指定一个极小值强制对所有模块进行分割
    },
    minimizer: [
      // 对js文件进行压缩,在output之中设置了filename和chunkFilename之后，webpack4的默认压缩就无效了
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        uglifyOptions: {
          sourceMap: config.build.productionSourceMap,
          mangle: true // 启用代码混淆
        }
      }),
      new OptimizeCSSAssetsPlugin({
        // 采用了文件名后接查询参数的方式解决缓存问题，在打包的时候，css压缩找不到正确的文件名了，需要重新配置规则
        assetNameRegExp: /\.css\?_=[a-z0-9]*$/g
      })
    ]
  },
  // 如果使用了cdn需要在这里设置打包时不包含的模块
  externals: {},
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
      chunksSortMode: 'dependency'
    }),
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env'),
      // 定义一个全局的上下文变量，目的是为了发布时能够通过目录区分不同的项目，而不用单独占用一个端口
      'CONTEXT_PATH': JSON.stringify(config.build.assetsPublicPath)
    }),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].css?_=[chunkhash]'),
    })
  ]
})

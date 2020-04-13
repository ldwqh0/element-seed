const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
// const utils = require('./utils')
module.exports = {
  entry: ['core-js/stable', 'regenerator-runtime/runtime', './src'],
  optimization: {
    minimize: true,
    runtimeChunk: true,
    splitChunks: { // 模块分割的选项，
      cacheGroups: {
        // 此处将所有的样式文件合并打包输出
        styles: {
          name: 'styles',
          // TODO 一个bug???
          // test: /\.(scss|vue|css|less)$/,
          test: m => m.constructor.name === 'CssModule',
          chunks: 'all',
          enforce: true,
          minChunks: 1
        }
      },
      chunks: 'all'
      // minSize: 30000, //默认只有当模块大小大于30Kb的时候才会启用模块分割，可以通过指定一个极小值强制对所有模块进行分割
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      // 定义一个全局的上下文变量，目的是为了发布时能够通过目录区分不同的项目，而不用单独占用一个端口
      CONTEXT_PATH: JSON.stringify(process.env.CONTEXT_PATH)
    }),
    new CompressionPlugin({
      test: /\.(js|css)$/
    })
  ]
}

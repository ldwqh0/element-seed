const webpack = require('webpack')

module.exports = {
  publicPath: process.env.CONTEXT_PATH,
  assetsDir: 'static',
  configureWebpack: {
    entry: ['core-js/stable', 'regenerator-runtime/runtime', './src'],
    plugins: [
      new webpack.DefinePlugin({
        // 定义一个全局的上下文变量，目的是为了发布时能够通过目录区分不同的项目，而不用单独占用一个端口
        'CONTEXT_PATH': JSON.stringify(process.env.CONTEXT_PATH)
      })
    ]
  }
}

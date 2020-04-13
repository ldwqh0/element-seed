const webpackProdConf = require('./config/webpack.prod.conf')
const webpackDevConf = require('./config/webpack.dev.conf')
// 如果使用测试环境，使用下面的代理配置
const proxy = require('./config/proxy_dev')
// 如果使用本机测试环境，使用下面的代理配置
// const proxy = require('./config/proxy_localhost')

const config = {
  assetsDir: process.env.ASSETS_DIR,
  publicPath: process.env.CONTEXT_PATH,
  devServer: {
    port: 80,
    proxy
  }
}
if (process.env.BABEL_ENV === 'production') {
  config.configureWebpack = webpackProdConf
} else {
  config.configureWebpack = webpackDevConf
}
module.exports = config

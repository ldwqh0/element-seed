import proxy from './proxy_dev.mjs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default function (envParams, { mode = 'development' } = {}) {
  return {
    mode,
    module: {
      rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }]
    },
    devServer: {
      publicPath: envParams.CONTEXT_PATH,
      contentBase: resolve(__dirname, '..', 'public'),
      overlay: {
        warnings: false,
        errors: true
      },
      inline: true,
      // 将这个改到一个不存在的地方，才能触发后台校验
      index: 'index.html',
      port: 80,
      proxy: proxy(envParams),
      historyApiFallback: {
        rewrites: [{
          from: new RegExp(`^${envParams.CONTEXT_PATH}`),
          to: envParams.CONTEXT_PATH
        }]
      }
    }
  }
}

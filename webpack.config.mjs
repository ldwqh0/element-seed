import { dirname, resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import ESLintWebpackPlugin from 'eslint-webpack-plugin'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
import { merge } from 'webpack-merge'
import dev from './config/webpack.config.dev.mjs'
import prod from './config/webpack.config.prod.mjs'
import env from './config/env.mjs'
// 当使用es modules时, 没有__dirname变量，需要使用工具计算该值
const __dirname = dirname(fileURLToPath(import.meta.url))
export default function (envParams, { mode = 'production' }) {
  const envToUse = Object.assign({
    CONTEXT_PATH: '/',
    entry: 'src'
  }, env, envParams)

  const basic = {
    entry: {
      main: ['core-js/stable', resolve(__dirname, envToUse.entry)]
    },
    mode,
    module: {
      rules: [{
        test: /((m?j)|t)s$/,
        loader: 'ts-loader',
        exclude: (path) => /(node_modules|bower_components)/.test(path),
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.(woff|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[id].[contenthash:7][ext]'
        }
      }, {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[id].[contenthash:7][ext]'
        }
      }]
    },
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.json', '.d.ts'],
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'public', 'index.html')
      }),
      new VueLoaderPlugin(),
      new ESLintWebpackPlugin({
        extensions: ['ts', 'js', 'vue'],
      }),

      new webpack.DefinePlugin({
        // 将配置对象env抽象为全局对象
        env: Object.entries(envToUse).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: JSON.stringify(value)
        }), {})
      })
    ],
    output: {
      publicPath: envToUse.CONTEXT_PATH,
    }
  }
  if (mode === 'development') {
    return merge(basic, dev(envToUse, { mode }))
  } else {
    return merge(basic, prod(envToUse, { mode }))
  }
}

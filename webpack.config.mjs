import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { VueLoaderPlugin } from 'vue-loader'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import env from './config/env.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  entry: {
    main: ['core-js/stable', resolve(__dirname, 'src/index.ts')]
  },
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
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.(png|svg|jpe?g|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/images/[id].[contenthash:7][ext]'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '四川乐融集团订货平台',
      // template: resolve(__dirname, 'index.html'),
      meta: {
        'version': `${new Date().getTime()}`,
        'renderer': 'webkit',
        'viewport': 'width=device-width,initial-scale=1.0'
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/styles/[id].[contenthash:7].css'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: resolve(__dirname, 'public'),
        to: resolve(__dirname, 'dist')
      }]
    }),
    new VueLoaderPlugin(),
    new CompressionPlugin({
      test: /\.(js|css|html)$/
    })
  ],
  target: ['web', 'es5'],
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: env.CONTEXT_PATH,
    filename: 'static/js/[id].[contenthash:7].js'
  }
}

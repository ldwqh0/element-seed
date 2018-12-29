'use strict'
const utils = require('./utils')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('../config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cssSourceMap = process.env.NODE_ENV === 'production' ? config.build.productionSourceMap : config.dev.cssSourceMap

// 创建eslint规则
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [utils.resolve('src'), utils.resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  entry: ['@babel/polyfill', './src'],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      '@': utils.resolve('src')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          transformAssetUrls: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file =>
          // 不编译node_modules中的文件
          /node_modules/.test(file)
          // 一律要编译vue文件
          && !/\.vue\.js/.test(file)
          // element中的文件也要编译，貌似element中的文件编译不完全
          && !/element-ui(\\|\/)(src|packages)/.test(file)
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash].[ext]')
        }
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash].[ext]')
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash].[ext]')
        }
      }, {
        test: /\.less$/,
        use: [{
          loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader'
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: cssSourceMap
          }
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: cssSourceMap
          }
        }]
      }, {
        test: /\.css$/,
        use: [{
          loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: cssSourceMap
          }
        }]
      }]
  },
  plugins: [
    new VueLoaderPlugin(),

    // 复制静态资源到目录中，如果有更多需要复制的资源，请在这里添加
    new CopyWebpackPlugin([{
      from: utils.resolve('static'),
      to: config.build.assetsSubDirectory,
      ignore: ['.*']
    }])
  ]
}

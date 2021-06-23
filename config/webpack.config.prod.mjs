import path, { resolve } from 'path'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { fileURLToPath } from 'url'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function (envParams, { mode = 'production' }) {
  return {
    mode,
    module: {
      rules: [{
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
      }]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            type: 'css/mini-extract',
            chunks: 'all',
            enforce: true,
          }
        }
      },
      minimizer: ['...', new CssMinimizerPlugin()],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{
          from: resolve(__dirname, '../', 'public', 'static'),
          to: resolve(__dirname, '../', 'dist', 'static')
        }]
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'static/styles/[id].[contenthash:7].css'
      }),
      new CompressionPlugin({
        test: /\.(js|css|html)$/
      })
    ],
    target: ['web', 'es5'],
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      publicPath: envParams.CONTEXT_PATH,
      filename: 'static/js/[id].[contenthash:7].js'
    }
  }
}

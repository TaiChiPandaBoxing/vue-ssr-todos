const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'
const devServer = {
  port: 8000,
  host: '0.0.0.0',
  hot: true,
  // open: true, 自动打开浏览器
  overlay: {
    errors: true
  }
  // historyFallback: {} 将错误的网址映射到规定的页面
}
const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HtmlWebpackPlugin()
]
let config

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: [
            'vue-style-loader',
            'css-loader',
            // {
            //   loader: 'css-loader',
            //   options: {
            //     module: true,
            //     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            //   }
            // },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js'),
      vendor: ['vue']
    },
    output: {
      // 开发环境绝对不能用chunkhash,否者报错
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'stylus-loader'
            ]
          })
        }
      ]
    },
    plugins: defaultPlugins.concat([
      new ExtractPlugin('style.[contentHash:8].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      // webpack配置单独打包，并且放在最后
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      })
    ])
  })
}

module.exports = config
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // },
      // 判断环境做更好
      // {
      //   test: /\.styl$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         sourceMap: true
      //       }
      //     },
      //     'stylus-loader'
      //   ]
      // },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-deadline.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HtmlWebpackPlugin()
  ]
}

if (isDev) {
  config.module.rules.push({
    test: /\.styl$/,
    use: [
      'style-loader',
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
  config.devtool = '#cheap-module-eval-source-map',
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    hot: true,
    // open: true, 自动打开浏览器
    overlay: {
      errors: true
    }
    // historyFallback: {} 将错误的网址映射到规定的页面
  },
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  // 开发环境绝对不能用chunkhash,否者报错
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.styl$/,
    use: ExtractPlugin.extract({
      fallback: 'style-loader',
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
  })
  config.plugins.push(
    new ExtractPlugin('style.[contentHash:8].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // webpack配置单独打包，并且放在最后
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  )
}

module.exports = config
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader')

const config = require('./config')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    path: path.resolve(process.cwd(), './lib'),
    // 输出解析文件的目录，url 相对于 HTML 页面
    publicPath: '/dist/',
    filename: 'box-ui.common.js',
    chunkFileName: '[id].js',
    libraryExport: 'default', 
    library: 'BOX',  // 导出库(exported library)的名称
    libraryTarget: 'commonjs2'  // 导出库(exported library)的类型
  },
  externals: config.externals,
  modules: {
    rules: [
      {
        test: /jsx|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compileOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(less|css)$/,
        loaders: ['style-loader', 'less-loader', 'css-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    alias: config.alias, // 模块别名列表
  },
  plugin: [
    new ProgressBarPlugin(), // 显示打包进度的
    new VueLoaderPlugin()
  ]
}

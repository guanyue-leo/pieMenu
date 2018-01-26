const webpack = require('webpack');
const rucksackCss = require('rucksack-css');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const theme = require('./theme.js');

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "index.js"//打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: 3002,
    hot: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
            loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "postcss-loader"
          }
        ]
      },
      {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                  {
                      loader: 'css-loader', // translates CSS into CommonJS
                      options: {
                          modules: true,
                          localIdentName:"[local]-[hash:base64:5]"
                      }
                  },
                  {
                      loader: 'postcss-loader' // translates CSS into CommonJS
                  },
                  {
                      loader: 'less-loader',// compiles Less to CSS
                  }
              ]
          }),
          exclude: /node_modules/
      },
      {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                  {
                      loader: 'css-loader' // translates CSS into CommonJS
                  },
                  {
                      loader: 'less-loader', // compiles Less to CSS
                      options: {
                          sourceMap: true,
                          modifyVars: theme
                      }
                  }
              ]
          }),
          include: /node_modules/
      },
      {
          test: /\.(eot|otf|svg|ttf|woff|woff2|png|jpg|gif)\w*/,
          loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true, disable: false })
  ]
};
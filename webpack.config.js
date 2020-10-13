const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const newLocal = 'dist';
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, newLocal),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: "babel-loader"
      },
      exclude: /node_modules/
    },
    {
      test: /\.css/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/main.html',
      filename: 'main.html'
    }),
  ]
};

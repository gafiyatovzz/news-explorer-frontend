const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackMd5Hash = require("webpack-md5-hash");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const newLocal = "dist";
const ImageWebpackLoader = require("image-webpack-loader");

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, newLocal),
    filename: "js/script.[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpeg|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'images',
            outputPath: 'images',
            useRelativePath: true,
            esModule: false,
          } // указали папку, куда складывать изображения
        },
        {
          loader: 'image-webpack-loader',
          options: {

          }
        },
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "/vendor/fonts",
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/styles.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./main.html",
      filename: "main.[contenthash].html",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./saved-news.html",
      filename: "saved-news.[contenthash].html",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new CleanWebpackPlugin(),
    new WebpackMd5Hash(),
  ],
};

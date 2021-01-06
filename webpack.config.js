const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const newLocal = "dist";
const ImageWebpackLoader = require("image-webpack-loader");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: './pages/mainPage.js',
    saved: './pages/savedNews.js'
  },
  output: {
    path: path.resolve(__dirname, newLocal),
    filename: "./js/[name].[hash].js",
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
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpeg|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images",
              esModule: false,
            },
          },
          {
            loader: "image-webpack-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "vendor/fonts",
              outputPath: "vendor/fonts",
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/icons",
              useRelativePath: true,
              esModule: false,
            },
          },
        ],
      },
      // {
      //   test: /\.html$/i,
      //   loader: 'html-loader',
      //   options: {
      //     attributes: false,
      //   },
      // },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./main.html",
      filename: "main.html",
       chunks: ['main'],
      // css: './pages/saved-news.css',
      // favicon: "./assets/images/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./saved-news.html",
      filename: "saved-news.html",
       chunks: ['saved'],
      // css: './pages/saved-news.css',
      // favicon: "./assets/images/favicon.ico"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default"],
      },
      canPrint: true,
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new CleanWebpackPlugin(),
    new WebpackMd5Hash(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

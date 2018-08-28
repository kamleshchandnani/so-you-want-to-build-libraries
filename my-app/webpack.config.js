/* eslint-disable max-len */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve('./build'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['raw-loader'],
      },
    ],
  },

  optimization: {
    minimize: false,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(['./build']),
  ],

  devtool: isProd ? 'hidden-source-map' : 'inline-source-map',

  devServer: {
    contentBase: path.resolve('./build'),
    port: 9999,
    overlay: true,
  },
};

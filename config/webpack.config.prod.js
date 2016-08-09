const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const defaultConfig = require('./webpack.config');


// Webpack Config Production
module.exports = webpackConfigProd = {
  output: {
    filename: '[name]-[hash].bundle.js',
    sourceMapFilename: '[name]-[hash].map',
    chunkFilename: '[id]-[hash].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      inject: true
    }),
  ]
};

module.exports = webpackMerge(defaultConfig, webpackConfigProd);

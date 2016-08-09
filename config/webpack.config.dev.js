const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const defaultConfig = require('./webpack.config');


// Webpack Config Development
module.exports = webpackConfigDev = {
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  }
};

module.exports = webpackMerge(defaultConfig, webpackConfigDev);

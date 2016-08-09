const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const defaultConfig = require('./webpack.config');


// Webpack Config Production
module.exports = webpackConfigProd = {
  entry: {
    'polyfills': './src/polyfills.browser.ts',
    'vendor': './src/vendor.browser.ts',
    'main': './src/main.browser.ts',
  },
  output: {
    path: './dist',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    /*new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),*/
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'main',
        'vendor',
        'polyfills'
      ],
      minChunks: Infinity
    }),
  ],
  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'to-string-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'raw-loader', 'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  }
};

module.exports = webpackMerge(defaultConfig, webpackConfigProd);

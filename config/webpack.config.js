const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


// Webpack Config
module.exports = webpackConfig = {
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


// Our Webpack Defaults
module.exports = defaultConfig = {
  devtool: 'cheap-module-source-map',
  cache: true,
  debug: true,
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    root: [
      path.join(__dirname, 'src')
    ],
    extensions: [
      '',
      '.ts',
      '.js'
    ]
  },
  devServer: {
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  }
};


module.exports = webpackMerge(defaultConfig, webpackConfig);

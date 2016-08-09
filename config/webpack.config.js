const webpack = require('webpack')
const WebpackMd5Hash = require('webpack-md5-hash');
const path = require('path');


// Our Webpack Defaults
module.exports = defaultConfig = {
  entry: {
    'polyfills': './src/polyfills.browser.ts',
    'vendor': './src/vendor.browser.ts',
    'main': './src/main.browser.ts',
  },
  output: {
    path: './build',
  },
  devtool: 'cheap-module-source-map',
  cache: true,
  debug: true,
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
  },
  plugins: [
    new WebpackMd5Hash(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'main',
        'vendor',
        'polyfills'
      ],
      minChunks: Infinity
    }),
  ],
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

const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app.js',
  target: 'web',

  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader'
      }
    ]
  },
}

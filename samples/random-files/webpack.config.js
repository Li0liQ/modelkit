const webpack = require('webpack');
const path = require('path');
const libraryName = 'modelkit';
const outputFile = libraryName + '.js';

const getFlag = function(flagName, defaultValue) {
  return defaultValue;
};

if (getFlag('js-2', false)) {
  console.log('flagged build in action')
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: getFlag('js-1', true) ? 'umd': 'commonjs',
    umdNamedDefine: getFlag('common-1', true),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  }
};

module.exports = config;
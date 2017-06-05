const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const libraryName = 'modelkit';
const outputFile = libraryName + '.js';

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['lodash'],
        }
      }
    }]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /node_modules[\/\\]grasp/,
      path.resolve(__dirname, 'node_modules'),
      {
        'grasp-equery': 'grasp-equery',
        'grasp-squery': 'grasp-squery',
        'acorn': 'acorn',
      }
    ),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'flattening': true,
    }),
  ],
  target: 'node',
  externals: [nodeExternals()]
};

module.exports = config;
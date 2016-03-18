'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  context: __dirname + '/srcback',
  entry: {
    server: './server'
  },
  target: 'node',
  output: {
    path: __dirname + '/binback',
    filename: '[name].js',
    library: "bg"
  },
  externals: nodeModules,
  devtool: "cheap-inline-module-source-map",
  plugins: [
    new webpack.NoErrorsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "common"
    // }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],
  
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }]
  }
};
'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
  context: __dirname,
  entry: {
    '/js/app': './srcfront/js/app',
    'mycss':'./srcfront/css/main.scss'
  },
  output: {
    path: __dirname + '/binfront',
    filename: '[name].js',
    library: "fg"
  },
  devtool: "cheap-inline-module-source-map",
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "/js/common"
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new ExtractTextPlugin('my.css')
  ],
  
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass!postcss-loader')
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      include: /\/node_modules\//,
      loader: 'file?name=[1].[ext]&regExp=node_modules/(.*)'
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      exclude: /\/node_modules\//,
      loader: 'file?name=[path][name].[ext]'
    },
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
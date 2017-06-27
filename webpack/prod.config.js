'use strict';

const webpack = require('webpack');
const common = require('./common');
const validate = require('webpack-validator');

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = validate({
  entry: [
    'babel-polyfill',
    common.entry.main
  ],

  output: common.output,

  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.UglifyJsPlugin(common.uglifyJsPluginConfig),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlPlugin(common.htmlPluginConfig)
  ],

  module: {
    preLoaders: [
      common.semistandardPreLoader
    ],
    loaders: [
      common.jsLoader,
      common.cssLoader
    ]
  },

  resolve: common.resolve
});

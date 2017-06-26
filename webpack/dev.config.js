'use strict';

const webpack = require('webpack');
const common = require('./common');
const validate = require('webpack-validator');

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    common.entry.main
  ],

  output: Object.assign({}, common.output, {
    filename: '[name].js',
    publicPath: ''
  }),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new DashboardPlugin(),

    new HtmlPlugin(common.htmlPluginConfig)
  ],

  module: {
    rules: [
      common.semistandardPreLoader,
      common.jsLoader,
      common.cssLoader
    ]
  },

  resolve: common.resolve
});
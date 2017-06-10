'use strict';

const path = require('path');
const webpack = require('webpack');
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
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new DashboardPlugin(),

    new HtmlPlugin({
      title: 'API Movie DB',
      template: path.join(__dirname, 'src', 'template.html')
    })
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'semistandard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loaders: ['style', 'css?modules']
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'file?name=public/fonts/[name].[ext]'
    }]
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components'),
      containers: path.join(__dirname, 'src', 'containers'),
      utils: path.join(__dirname, 'src', 'utils'),
      dist: path.join(__dirname, 'src', 'dist'),
      constants: path.join(__dirname, 'src', 'constants'),
      reducers: path.join(__dirname, 'src', 'reducers'),
      actions: path.join(__dirname, 'src', 'actions')
    }
  }
});

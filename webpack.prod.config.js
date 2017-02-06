'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');

const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = validate({
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name]-[hash].js',
  },

  plugins: [
    new extractTextPlugin('[name]-[hash].css'),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new htmlPlugin({
      title: 'POC React',
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
      loader: extractTextPlugin.extract('style', 'css?modules')
    }]
  },
  
  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components'),
      containers: path.join(__dirname, 'src', 'containers'),
	  utils: path.join(__dirname, 'src', 'utils')
    }
  }
});

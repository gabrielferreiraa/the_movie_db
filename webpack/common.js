'use strict';

const { join } = require('path');

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  docs: join(__dirname, '..', 'docs'),
  dist: join(__dirname, '..', 'src', 'dist')
};

module.exports = {
  paths,

  entry: {
    main: join(paths.src, 'index')
  },

  output: {
    path: paths.docs,
    filename: '[name]-[hash].js',
  },

  htmlPluginConfig: {
    title: 'API Movie DB',
    template: join(paths.src, 'template.html')
  },

  semistandardPreLoader: {
    test: /\.js$/,
    include: paths.src,
    use: {
      loader: 'semistandard',
      options: {
        parser: 'babel-eslint'
      }
    }
  },

  jsLoader: {
    test: /\.js$/,
    include: paths.src,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['env', { modules: false }], 'stage-0', 'react'],
        plugins: [
          'react-hot-loader/babel',
          ['transform-runtime', {
            helpers: false,
            polyfill: false,
            regenerator: true
          }]
        ]
      }
    }
  },

  cssLoader: {
    test: /\.css$/,
    include: paths.src,
    use: ['style', 'css?modules']
  },

  resolve: {
    alias: {
      src: paths.src,
      components: join(paths.src, 'components'),
      utils: join(paths.src, 'utils'),
      containers: join(paths.src, 'containers'),
      dist: join(paths.src, 'dist'),
      constants: join(paths.src, 'constants'),
      reducers: join(paths.src, 'reducers'),
      actions: join(paths.src, 'actions'),
    }
  }
};
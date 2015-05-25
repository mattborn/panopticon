var webpack = require('webpack');

module.exports = {
  watch: false,
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: '6to5-loader'
      }
    ]
  },
  externals: {
    'firebase': 'Firebase'
  }
};

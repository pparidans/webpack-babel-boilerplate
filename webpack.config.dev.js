const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      './src/index.js'
    ]
  },
  resolve: {
    root: [ path.resolve('./src') ],
    extensions: [ '', '.js']
  },
  output: {
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
}

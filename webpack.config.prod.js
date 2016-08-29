const webpack = require('webpack')
const _ = require('./webpack.config.dev.js')

_.devtool = false
_.plugins = (_.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
])

module.exports = _

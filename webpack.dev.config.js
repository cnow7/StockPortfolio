const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules') },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  }
}

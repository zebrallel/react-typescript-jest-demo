const webpack = require('webpack')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  entry: {
      main : 'index.tsx',
      vendors: ['react', 'react-dom']
  },
  output: {
    filename: '[name].js',
    publicPath: 'dist',
    path: path.resolve('dist')
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
    stats: {
      modules: false,
      chunks: false,
      children: false,
      chunkModules: false,
      hash: false,
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src') }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
          name : 'vendors'
      })
  ]
}

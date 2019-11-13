import merge from 'webpack-merge'
import { getCommonConfig } from './webpack.common'
import webpack from 'webpack'

export const getDevConfig = (openBrowser = true): webpack.Configuration => ({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/dist',
    port: 8080,
    open: openBrowser,
    hot: openBrowser,
    compress: true,
    stats: 'errors-only',
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
})

export default merge(getCommonConfig(), getDevConfig())

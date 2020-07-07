import merge from 'webpack-merge'
import { getCommonConfig } from './webpack.common'
import { Configuration as WebpackConfiguration } from 'webpack'
import 'webpack-dev-server'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export const getDevConfig = (isTest = false): WebpackConfiguration => ({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/dist',
    port: 8080,
    open: !isTest,
    hot: !isTest,
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
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: isTest ? 'test' : 'dev',
          },
        },
      },
    ],
  },
  plugins: isTest ? [] : [new ReactRefreshWebpackPlugin()],
})

export default merge(getCommonConfig(), getDevConfig())

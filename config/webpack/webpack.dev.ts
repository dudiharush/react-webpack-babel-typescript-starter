import merge from 'webpack-merge'
import { getCommonConfig, WebpackCommonEnv } from './webpack.common'
import webpack from 'webpack'
import 'webpack-dev-server'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export type WebpackDevEnv = {
  test?: boolean
} & WebpackCommonEnv

const getDevConfig = ({ test = false }: WebpackDevEnv = {}): webpack.Configuration => ({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/dist',
    port: 8080,
    open: !test,
    hot: !test,
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
            envName: test ? 'test' : 'dev',
          },
        },
      },
    ],
  },
  plugins: test ? [] : [new ReactRefreshWebpackPlugin()],
})

export default (env: WebpackDevEnv = {}): webpack.Configuration => merge(getCommonConfig(env), getDevConfig(env))

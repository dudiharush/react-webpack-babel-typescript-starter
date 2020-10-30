import merge from 'webpack-merge'
import { getCommonConfig, WebpackCommonEnv } from './webpack.common'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserJSPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

const getProdConfig = (env: WebpackCommonEnv = {}): webpack.Configuration => ({
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: 'prod',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],
})

export default (env: WebpackCommonEnv = {}): webpack.Configuration => merge(getCommonConfig(env), getProdConfig(env))

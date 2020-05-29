import merge from 'webpack-merge'
import { getCommonConfig } from './webpack.common'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserJSPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Configuration as WebpackConfiguration } from 'webpack'

const prodConfig: WebpackConfiguration = {
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],
}

export const getProdConfig = (): WebpackConfiguration => merge(getCommonConfig(), prodConfig)
const config = getProdConfig()
export default config

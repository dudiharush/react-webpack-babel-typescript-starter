import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import 'webpack-dev-server'
import merge from 'webpack-merge'
import getProdConfig from './webpack.config.prod'
import webpack from 'webpack'
import { WebpackCommonEnv } from './webpack.config.common'

const analyzeConfig: webpack.Configuration = {
  plugins: [new BundleAnalyzerPlugin()],
}

export default (env: WebpackCommonEnv = {}): webpack.Configuration => merge(getProdConfig(env), analyzeConfig)

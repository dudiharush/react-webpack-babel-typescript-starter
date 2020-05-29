import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import 'webpack-dev-server'
import merge from 'webpack-merge'
import { getProdConfig } from './webpack.prod'
import webpack = require('webpack')

const analyzeConfig: webpack.Configuration = {
  plugins: [new BundleAnalyzerPlugin()],
}

export default merge(getProdConfig(), analyzeConfig)

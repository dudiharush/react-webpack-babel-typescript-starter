import merge from 'webpack-merge';
import { getCommonConfig } from './webpack.common';

module.exports = merge(getCommonConfig(), {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: '/dist',
     port: 8080,
     open: true,
     hot: true,
     compress: true,
     stats: 'errors-only',
     overlay: true,
   }
});
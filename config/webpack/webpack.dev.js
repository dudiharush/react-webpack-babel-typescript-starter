
const merge = require('webpack-merge');
const getCommonConfig = require('./webpack.common.js');

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
const merge = require('webpack-merge');
const getCommonConfig = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
    
module.exports = merge(getCommonConfig({mode: 'production', debug: false}), {
    mode: 'production',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },

});
import merge from 'webpack-merge';
import { getCommonConfig } from './webpack.common';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
    
export default merge(getCommonConfig({mode: 'production', debug: false}), {
    mode: 'production',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },

});
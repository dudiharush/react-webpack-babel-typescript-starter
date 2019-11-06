const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = (env = {}) => {
  const { mode = 'development', debug = true } = env;

  return {
  mode: 'none',
  entry: {
    index: join(resolve('src'), 'index.tsx'),
  },
  output: {
    pathinfo: debug === true,
    path: resolve('dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: mode === 'development',
            },
          },
          'css-loader',
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Babel + TypeScript + React = ❤️',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ]
}
};

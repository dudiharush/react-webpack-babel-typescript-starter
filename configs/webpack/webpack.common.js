const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'none',
  entry: {
    index: join(resolve('src'), 'index.tsx'),
  },
  output: {
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
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Babel + TypeScript + React = ❤️',
      template: 'src/index.html',
    }),
  ]
};

module.exports = config;

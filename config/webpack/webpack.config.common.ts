import { join, resolve } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
type Mode = Pick<webpack.Configuration, 'mode'>

export type WebpackCommonEnv = {
  debug?: boolean
} & Mode

export const getCommonConfig = (env: WebpackCommonEnv = {}): webpack.Configuration => {
  const { mode = 'development', debug = true } = env

  return {
    mode: 'none',
    entry: {
      index: [join(resolve('src'), 'index.tsx')],
    },
    output: {
      pathinfo: debug === true,
      path: resolve('dist'),
      filename: '[name].js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Babel + TypeScript + React = ❤️',
        template: 'src/index.html',
      }),
    ],
  }
}

export const getBabelRcRule = (isDevelopment = true): object => ({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/env', '@babel/react', '@babel/typescript'],
      plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
    },
  },
})

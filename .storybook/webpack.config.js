module.exports = ({ config }) => {
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /node_modules/,
      include: /src/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        // Optional
        // {
        //   loader: require.resolve('react-docgen-typescript-loader'),
        // },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
    };
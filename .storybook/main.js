const path = require('path');
module.exports = {
    core: { builder: 'webpack5' },
    stories: ['../src/**/*.stories.@(tsx)'],
    addons: ['@storybook/addon-essentials'],
// Export a function. Accept the base config as the only param.
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
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

    // Return the altered config
    return config;
  }
}
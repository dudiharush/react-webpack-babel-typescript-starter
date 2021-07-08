const path = require('path');

module.exports = {
    core: { builder: 'webpack5' },
    stories: ['../src/**/*.stories.@(tsx)'],
    addons: ['@storybook/addon-essentials'],
    reactOptions: {
      fastRefresh: true,
      strictMode: true,
    },
// Export a function. Accept the base config as the only param.
  webpackFinal: async (config, { configType }) => {
   
    // Return the altered config
    return config;
  }
}
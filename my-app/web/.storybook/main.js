module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript'
  }
};
const paths = require('./paths');
const utils = require('./utils');

module.exports = {
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  enforce: 'pre',
  use: [
    {
      options: {
        cache: true,
        fix: false,
        formatter: 'stylish',
        eslintPath: require.resolve('eslint'),
      },
      loader: require.resolve('eslint-loader'),
    },
  ],
  include: paths.appPath,
  exclude: utils.exclude,
};

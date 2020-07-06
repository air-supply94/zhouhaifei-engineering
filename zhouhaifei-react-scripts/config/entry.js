const paths = require('./paths');
const utils = require('./utils');

module.exports = [
  utils.isDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'),

  // Finally, this is your app's code:
  paths.appIndexJs,
].filter(Boolean);

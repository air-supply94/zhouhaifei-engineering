const paths = require('./paths');
const utils = require('./utils');

module.exports = Object.entries({
  webpackHotDevClient: utils.isDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'),

  // Finally, this is your app's code:
  app: paths.appIndexJs,
}).filter((item) => item[1])
  .reduce((prev, item) => {
    prev[item[0]] = item[1];
    return prev;
  }, {});

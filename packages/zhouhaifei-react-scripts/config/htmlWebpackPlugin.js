const paths = require('./paths');
const utils = require('./utils');

module.exports = {
  inject: true,
  cache: false,
  publicPath: utils.publicUrlOrPath,
  template: paths.appIndexEjs,
  minify: utils.isProduction ? {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  } : {},
};

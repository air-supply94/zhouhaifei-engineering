const path = require('path');
const paths = require('./paths');
const utils = require('./utils');

module.exports = {
  templateParameters: { publicPath: paths.publicUrlOrPath },
  favicon: path.resolve(paths.appPublic, 'favicon.ico'),
  inject: true,
  template: path.resolve(paths.appPublic, 'index.ejs'),
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

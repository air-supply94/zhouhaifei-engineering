const utils = require('./utils');

module.exports = [
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    type: 'asset',
    generator: { filename: `${utils.resourceName.image}/[hash].[ext]` },
    parser: { dataUrlCondition: { maxSize: utils.imageInlineSizeLimit }},
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
];

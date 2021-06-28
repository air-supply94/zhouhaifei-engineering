const utils = require('./utils');

module.exports = [
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    type: 'asset',
    generator: { filename: `${utils.resourceName.image}/[hash].[ext]` },
    parser: { dataUrlCondition: { maxSize: utils.imageInlineSizeLimit }},
  },
  {
    type: 'asset',
    generator: { filename: `${utils.resourceName.media}/[hash].[ext]` },
    exclude: [
      /\.(js|mjs|jsx|ts|tsx)$/,
      /\.html$/,
      /\.ejs$/,
      /\.json$/,
    ],
  },
];

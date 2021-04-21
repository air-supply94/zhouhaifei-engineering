const utils = require('./utils');

module.exports = [
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      {
        loader: require.resolve('url-loader'),
        options: {
          limit: utils.imageInlineSizeLimit,
          name: `${utils.resourceName.image}/[hash].[ext]`,
        },
      },
    ],
  },
  {
    loader: require.resolve('url-loader'),
    exclude: [
      /\.(js|mjs|jsx|ts|tsx)$/,
      /\.html$/,
      /\.ejs$/,
      /\.json$/,
    ],
    options: { name: `${utils.resourceName.media}/[hash].[ext]` },
  },
];

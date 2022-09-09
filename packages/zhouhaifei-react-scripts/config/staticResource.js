const utils = require('./utils');

module.exports = [
  {
    test: /\.svg$/,
    use: [
      {
        loader: require.resolve('@svgr/webpack'),
        options: {
          prettier: false,
          svgo: false,
          svgoConfig: { plugins: [{ removeViewBox: false }]},
          titleProp: true,
          ref: true,
        },
      },
      {
        loader: require.resolve('file-loader'),
        options: { name: `${utils.resourceName.image}/[hash].[ext]` },
      },
    ],
    issuer: { and: [/\.(ts|tsx|js|jsx|md|mdx)$/]},
  },
  {
    test: [/\.avif$/],
    type: 'asset',
    mimetype: 'image/avif',
    parser: { dataUrlCondition: { maxSize: utils.imageInlineSizeLimit }},
  },
  {
    test: /\.(gif|png|jpe?g|bmp)$/i,
    type: 'asset',
    generator: { filename: `${utils.resourceName.image}/[hash].[ext]` },
    parser: { dataUrlCondition: { maxSize: utils.imageInlineSizeLimit }},
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
];

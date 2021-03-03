const utils = require('./utils');

module.exports = [
  /*
   * "url" loader works like "file" loader except that it embeds assets
   * smaller than specified limit in bytes as data URLs to avoid requests.
   * A missing `test` is equivalent to a match.
   */
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      {
        loader: require.resolve('file-loader'),
        options: {
          limit: utils.imageInlineSizeLimit,
          name: `${utils.resourceName.image}/[hash].[ext]`,
        },
      },
    ],
  },

  /*
   * "file" loader makes sure those assets get served by WebpackDevServer.
   * When you `import` an asset, you get its (virtual) filename.
   * In production, they would get copied to the `build` folder.
   * This loader doesn't use a "test" so it will catch all modules
   * that fall through the other loaders.
   */
  {
    loader: require.resolve('file-loader'),

    /*
     * Exclude `js` files to keep "css" loader working as it injects
     * its runtime that would otherwise be processed through "file" loader.
     * Also exclude `html` and `json` extensions so they get processed
     * by webpacks internal loaders.
     */
    exclude: [
      /\.(js|mjs|jsx|ts|tsx)$/,
      /\.html$/,
      /\.ejs$/,
      /\.json$/,
    ],
    options: { name: `${utils.resourceName.media}/[hash].[ext]` },
  },
];

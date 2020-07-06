const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const utils = require('./utils');

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getStyleLoaders(cssOptions, preProcessor) {
  const loaders = [
    utils.isDevelopment && require.resolve('style-loader'),
    utils.isProduction && { loader: MiniCssExtractPlugin.loader },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('postcss-loader'),
      options: { config: { path: __dirname }},
    },
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve('resolve-url-loader'),
        options: { sourceMap: utils.isProduction && utils.shouldUseSourceMap },
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true,
          lessOptions: { javascriptEnabled: true },
        },
      }
    );
  }
  return loaders;
}

module.exports = [
  {
    test: cssRegex,
    exclude: cssModuleRegex,
    use: getStyleLoaders({
      importLoaders: 1,
      sourceMap: utils.isProduction && utils.shouldUseSourceMap,
    }),
    sideEffects: true,
  },
  {
    test: cssModuleRegex,
    use: getStyleLoaders({
      importLoaders: 1,
      sourceMap: utils.isProduction && utils.shouldUseSourceMap,
      modules: { getLocalIdent: getCSSModuleLocalIdent },
    }),
  },
  {
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 3,
        sourceMap: utils.isProduction && utils.shouldUseSourceMap,
      },
      'less-loader'
    ),
    sideEffects: true,
  },
  {
    test: lessModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 3,
        sourceMap: utils.isProduction && utils.shouldUseSourceMap,
        modules: { getLocalIdent: getCSSModuleLocalIdent },
      },
      'less-loader'
    ),
  },
];

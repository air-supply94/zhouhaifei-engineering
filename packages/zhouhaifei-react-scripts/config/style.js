const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');
const utils = require('./utils');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

function getStyleLoaders(cssOptions, preProcessor) {
  const loaders = [
    utils.isDevelopment && require.resolve('style-loader'),
    utils.isProduction && MiniCssExtractPlugin.loader,
    {
      loader: require.resolve('css-loader'),
      options: {
        sourceMap: utils.isProduction && utils.shouldUseSourceMap,
        import: true,
        url: true,
        ...cssOptions,
      },
    },
    utils.isProduction && {
      loader: require.resolve('postcss-loader'),
      options: {
        sourceMap: utils.isProduction && utils.shouldUseSourceMap,
        ident: 'postcss',
        plugins: [
          require('postcss-import'),
          require('postcss-cssnext'),
          require('postcss-flexbugs-fixes'),
        ],
      },
    },
  ].filter(Boolean);

  if (preProcessor) {
    const loaderConfig = {
      loader: require.resolve(preProcessor),
      options: { sourceMap: utils.isProduction && utils.shouldUseSourceMap },
    };

    if (preProcessor === 'less-loader') {
      loaderConfig.options.lessOptions = { javascriptEnabled: true };
    }

    loaders.push(loaderConfig);
  }

  return loaders;
}

module.exports = [
  {
    test: cssRegex,
    exclude: [cssModuleRegex],
    use: getStyleLoaders(),
  },
  {
    include: [paths.appSrc],
    test: cssModuleRegex,
    use: getStyleLoaders({ modules: { localIdentName: '[name][hash:base64]' }}),
  },
  {
    test: lessRegex,
    exclude: [lessModuleRegex],
    use: getStyleLoaders({}, 'less-loader'),
  },
  {
    include: [paths.appSrc],
    test: lessModuleRegex,
    use: getStyleLoaders({ modules: { localIdentName: '[name][hash:base64]' }}, 'less-loader'),
  },
  {
    test: sassRegex,
    exclude: [sassModuleRegex],
    use: getStyleLoaders({}, 'sass-loader'),
  },
  {
    include: [paths.appSrc],
    test: sassModuleRegex,
    use: getStyleLoaders({ modules: { localIdentName: '[name][hash:base64]' }}, 'sass-loader'),
  },
];

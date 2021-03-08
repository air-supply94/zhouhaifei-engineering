const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');
const utils = require('./utils');

function getStyleLoaders(cssOptions, preProcessor) {
  const loaders = [
    utils.isDevelopment && require.resolve('style-loader'),
    utils.isProduction && MiniCssExtractPlugin.loader,
    {
      loader: require.resolve('css-loader'),
      options: {
        import: true,
        url: true,
        ...cssOptions,
      },
    },
    utils.isProduction && {
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            require('postcss-import'),
            require('postcss-cssnext'),
            require('postcss-flexbugs-fixes'),
          ],
        },
      },
    },
  ].filter(Boolean);

  if (preProcessor) {
    const loaderConfig = {
      loader: require.resolve(preProcessor),
      options: {},
    };
    if (preProcessor === 'less-loader') {
      loaderConfig.options.lessOptions = {
        javascriptEnabled: true,
        modifyVars: utils.less.theme,
      };
    }

    loaders.push(loaderConfig);
  }

  return loaders;
}

function getGlobalStyle(suffix) {
  return path.resolve(paths.appSrc, `global.${suffix}`);
}

module.exports = [
  {
    test: /\.module\.css$/,
    include: [paths.appSrc],
    use: getStyleLoaders({ modules: { localIdentName: '[name]__[local]--[hash:base64:8]' }}),
  },
  {
    test: /\.css$/,
    use: getStyleLoaders(),
  },
  {
    include: [getGlobalStyle('less')],
    use: getStyleLoaders({}, 'less-loader'),
  },
  {
    test: /\.less$/,
    include: [
      paths.appSrc,
      ...utils.less.moduleInclude,
    ],
    use: getStyleLoaders({ modules: { localIdentName: '[name]__[local]--[hash:base64:8]' }}, 'less-loader'),
  },
  {
    test: /\.less$/,
    use: getStyleLoaders({}, 'less-loader'),
  },
  {
    include: [
      getGlobalStyle('scss'),
      getGlobalStyle('sass'),
    ],
    use: getStyleLoaders({}, 'sass-loader'),
  },
  {
    test: /\.(scss|sass)$/,
    include: [paths.appSrc],
    use: getStyleLoaders({ modules: { localIdentName: '[name]__[local]--[hash:base64:8]' }}, 'sass-loader'),
  },
  {
    test: /\.(scss|sass)$/,
    use: getStyleLoaders({}, 'sass-loader'),
  },
];

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const utils = require('./utils');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

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
    loaders.push(
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: utils.isProduction && utils.shouldUseSourceMap,
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
    exclude: [cssModuleRegex],
    use: getStyleLoaders(),
  },
  {
    test: cssModuleRegex,
    use: getStyleLoaders({ modules: { localIdentName: '[name][hash:base64]' }}),
  },
  {
    test: lessRegex,
    exclude: [lessModuleRegex],
    use: getStyleLoaders({}, 'less-loader'),
  },
  {
    test: lessModuleRegex,
    use: getStyleLoaders({ modules: { localIdentName: '[name][hash:base64]' }},
      'less-loader'
    ),
  },
];

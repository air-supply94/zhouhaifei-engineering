import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { paths } from './paths';
import { utils } from './utils';

function getStyleLoaders(cssOptions?: any, preProcessor?: any) {
  const loaders = [
    utils.isDevelopment && 'style-loader',
    utils.isProduction && MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        import: true,
        url: true,
        ...cssOptions,
      },
    },
    { loader: 'postcss-loader' },
  ].filter(Boolean);

  if (preProcessor) {
    const loaderConfig: any = {
      loader: preProcessor,
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

export const styleConfig = [
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
    test: /\.less$/,
    include: [
      getGlobalStyle('less'),
      /node_modules/,
    ],
    exclude: [...utils.less.moduleInclude],
    use: getStyleLoaders({ importLoaders: 0 }, 'less-loader'),
  },
  {
    test: /\.less$/,
    include: [
      paths.appSrc,
      ...utils.less.moduleInclude,
    ],
    exclude: getGlobalStyle('less'),
    use: getStyleLoaders(
      {
        importLoaders: 0,
        modules: { localIdentName: '[name]__[local]--[hash:base64:8]' },
      },
      'less-loader'),
  },
];

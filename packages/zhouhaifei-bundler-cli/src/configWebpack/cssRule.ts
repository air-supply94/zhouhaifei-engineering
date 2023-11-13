import { LOCAL_IDENT_NAME, STYLE_EXTENSIONS } from '../constants';
import type { WebpackApplyOptions } from '../types';
import { getBrowsersList } from '../utils';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { getPostcssConfig } from '@zhouhaifei/postcss-preset';

export function cssRule({
  config,
  isDevelopment,
  srcDir,
  userConfig: {
    lessOptions,
    autoCSSModules,
    styleLoaderOptions,
    cssLoaderModules,
    cssLoaderOptions,
    sassOptions,
    stylusOptions,
    targets,
    postcssPresetEnvOptions,
    autoprefixer,
    extraPostCSSPlugins,
    postcssOptions,
  },
}: WebpackApplyOptions) {
  const rulesConfig = [
    {
      name: 'css',
      test: /\.css(\?.*)?$/,
    },
    {
      name: 'less',
      test: /\.less(\?.*)?$/,
      loader: require.resolve('less-loader'),
      loaderOptions: {
        implementation: require.resolve('less'),
        lessOptions,
      },
    },
    {
      name: 'sass',
      test: /\.(sass|scss)(\?.*)?$/,
      loader: require.resolve('sass-loader'),
      loaderOptions: { sassOptions },
    },
    {
      name: 'stylus',
      test: /\.(styl|stylus)(\?.*)?$/,
      loader: require.resolve('stylus-loader'),
      loaderOptions: { stylusOptions },
    },
  ];

  rulesConfig.forEach((item) => {
    const {
      name,
      test,
      loader,
      loaderOptions,
    } = item;

    const rule = config
      .module
      .rule(name)
      .test(test);

    const moduleAndNormal = [
      autoCSSModules !== false && {
        rule: rule
          .oneOf(`${name}-module`)
          .exclude
          .add(/node_modules/)
          .add(STYLE_EXTENSIONS.map((val) => path.resolve(srcDir, `global.${val}`)))
          .end(),
        isAutoCSSModuleRule: true,
      },
      {
        rule: rule
          .oneOf(name),
        isAutoCSSModuleRule: false,
      },
    ].filter(Boolean);

    moduleAndNormal.forEach((val) => {
      const {
        rule,
        isAutoCSSModuleRule,
      } = val;

      // style-loader、mini-css-extract-plugin
      if (isDevelopment && styleLoaderOptions !== false) {
        rule
          .use('style-loader')
          .loader(require.resolve('style-loader'))
          .options({
            base: 0,
            esModule: true,
            ...styleLoaderOptions,
          });
      } else {
        rule
          .use('mini-css-extract-plugin')
          .loader(MiniCssExtractPlugin.loader)
          .options({
            emit: true,
            esModule: true,
          });
      }

      // css-loader
      const cssLoaderModulesConfig = isAutoCSSModuleRule ? {
        localIdentName: LOCAL_IDENT_NAME,
        ...cssLoaderModules,
      } : {
        localIdentName: LOCAL_IDENT_NAME,
        auto: true,
        ...cssLoaderModules,
      };

      rule
        .use('css-loader')
        .loader(require.resolve('css-loader'))
        .options({
          import: true,
          esModule: true,
          importLoaders: 1,
          url: true,
          modules: cssLoaderModulesConfig,
          ...cssLoaderOptions,
        });

      // postcss-loader
      rule
        .use('postcss-loader')
        .loader(require.resolve('postcss-loader'))
        .options({
          postcssOptions: getPostcssConfig({
            browsers: getBrowsersList(targets),
            autoprefixer,
            postcssPresetEnvOptions,
            extraPostCSSPlugins,
            postcssOptions,
          }),
        });

      // other-loader
      if (loader) {
        rule
          .use(`${name}-loader`)
          .loader(loader)
          .options(loaderOptions || {});
      }
    });
  });
}

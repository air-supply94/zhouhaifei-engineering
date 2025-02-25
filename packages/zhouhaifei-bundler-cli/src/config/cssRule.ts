import path from 'node:path';
import { getPostcssConfig } from '@zhouhaifei/postcss-preset';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { LOCAL_IDENT_NAME, STYLE_EXTENSIONS } from '../constants';
import type { ApplyOptions } from '../types';
import { getBrowsersList } from '../utils';

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
    targets,
    postcssPresetEnvOptions,
    autoprefixer,
    extraPostCSSPlugins,
    postcssOptions,
  },
}: ApplyOptions) {
  const rulesConfig = [
    {
      name: 'css',
      test: /\.css(\?.*)?$/,
    },
    {
      name: 'less',
      test: /\.less(\?.*)?$/,
      loader: 'less-loader',
      loaderOptions: { lessOptions },
    },
    {
      name: 'sass',
      test: /\.(sass|scss)(\?.*)?$/,
      loader: 'sass-loader',
      loaderOptions: { sassOptions },
    },
  ];

  rulesConfig.forEach((item) => {
    const { name, test, loader, loaderOptions } = item;

    const rule = config.module.rule(name).test(test);

    const moduleAndNormal = [
      autoCSSModules !== false && {
        rule: rule
          .oneOf(`${name}-module`)
          .exclude.add(/node_modules/)
          .add(STYLE_EXTENSIONS.map((val) => path.resolve(srcDir, `global.${val}`)))
          .end(),
        auto: undefined,
      },
      {
        rule: rule.oneOf(name),
        auto: true,
      },
    ].filter(Boolean);

    moduleAndNormal.forEach((val) => {
      const { rule, auto } = val;

      // style-loader、mini-css-extract-plugin
      if (isDevelopment && styleLoaderOptions !== false) {
        rule
          .use('style-loader')
          .loader('style-loader')
          .options({
            base: 0,
            esModule: true,
            ...styleLoaderOptions,
          });
      } else {
        rule.use('mini-css-extract-plugin').loader(MiniCssExtractPlugin.loader).options({
          emit: true,
          esModule: true,
        });
      }

      // css-loader
      const cssLoaderModulesConfig = {
        namedExport: false,
        exportLocalsConvention: 'as-is',
        localIdentName: LOCAL_IDENT_NAME,
        exportGlobals: true,
        auto,
        ...cssLoaderModules,
      };

      rule
        .use('css-loader')
        .loader('css-loader')
        .options({
          importLoaders: 1,
          modules: cssLoaderModulesConfig,
          ...cssLoaderOptions,
        });

      // postcss-loader
      rule
        .use('postcss-loader')
        .loader('postcss-loader')
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

import CSSMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import type { TerserOptions } from 'terser-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import type { WebpackApplyOptions, UserConfig } from '../types';
import { CSSMinifier, JSMinifier } from '../types';
import { getEsBuildTarget } from '../utils';
import type { TransformOptions as EsbuildOptions } from 'esbuild';

export function compressPlugin({
  userConfig: {
    jsMinifier,
    cssMinifier,
    targets,
    jsMinifierOptions,
    cssMinifierOptions,
    nocompress,
  },
  isDevelopment,
  config,
}: WebpackApplyOptions) {
  if (
    isDevelopment ||
    nocompress ||
    (jsMinifier === JSMinifier.none && cssMinifier === CSSMinifier.none)
  ) {
    config.optimization.minimize(false);
    return;
  }
  config.optimization.minimize(true);

  const esbuildTarget = getEsBuildTarget(targets);

  // 提升 esbuild 压缩产物的兼容性,比如不出现 ?? 这种语法
  if (!esbuildTarget.includes('es2015')) {
    esbuildTarget.push('es2015');
  }

  let minify;
  let terserOptions: UserConfig['jsMinifierOptions'];
  if (jsMinifier === JSMinifier.esbuild) {
    minify = TerserPlugin.esbuildMinify;
    terserOptions = {
      target: esbuildTarget,

      // remove all comments
      legalComments: 'none',
      ...jsMinifierOptions,
    } as EsbuildOptions;
  } else if (jsMinifier === JSMinifier.terser) {
    minify = TerserPlugin.terserMinify;
    terserOptions = {
      ecma: 2015,
      keep_classnames: false,
      keep_fnames: false,
      compress: {
        comparisons: false,
        inline: 2,
      },
      format: {
        comments: false,
        ascii_only: true,
      },
      ...jsMinifierOptions,
    } as TerserOptions;
  }

  if (jsMinifier !== JSMinifier.none) {
    config.optimization.minimizer(`js-${jsMinifier}`)
      .use(TerserPlugin, [
        {
          extractComments: false,
          minify,

          // @ts-expect-error
          terserOptions,
        },
      ]);
  }

  let cssMinify;
  let minimizerOptions: UserConfig['cssMinifierOptions'];
  if (cssMinifier === CSSMinifier.esbuild) {
    cssMinify = CSSMinimizerWebpackPlugin.esbuildMinify;
    minimizerOptions = {
      target: esbuildTarget,

      // remove all comments
      legalComments: 'none',
    } as EsbuildOptions;
  } else if (cssMinifier === CSSMinifier.cssnano) {
    cssMinify = CSSMinimizerWebpackPlugin.cssnanoMinify;
    minimizerOptions = {
      preset: [
        'default',
        { discardComments: { removeAll: true }},
      ],
    };
  }
  minimizerOptions = {
    ...minimizerOptions,
    ...cssMinifierOptions,
  };

  if (cssMinifier !== CSSMinifier.none) {
    config.optimization
      .minimizer(`css-${cssMinifier}`)
      .use(CSSMinimizerWebpackPlugin, [
        {
          minify: cssMinify,
          minimizerOptions,
        },
      ]);
  }
}

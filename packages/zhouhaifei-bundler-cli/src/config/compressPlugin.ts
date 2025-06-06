import CSSMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import type { TransformOptions as EsbuildOptions } from 'esbuild';
import type { TerserOptions } from 'terser-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import type { ApplyOptions, UserConfig } from '../types';
import { CSSMinifier, JSMinifier } from '../types';
import { getEsBuildTarget } from '../utils';

export function compressPlugin({
  userConfig: { jsMinifier, cssMinifier, targets, jsMinifierOptions, cssMinifierOptions, nocompress },
  isDevelopment,
  config,
}: ApplyOptions) {
  if (isDevelopment || nocompress || (jsMinifier === JSMinifier.none && cssMinifier === CSSMinifier.none)) {
    config.optimization.minimize(false);
    return;
  }
  config.optimization.minimize(true);

  const esbuildTarget = getEsBuildTarget(targets);

  // 提升 esbuild 压缩产物的兼容性,比如不出现 ?? 这种语法
  if (!esbuildTarget.includes('es2015')) {
    esbuildTarget.push('es2015');
  }

  let minify: any;
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
      // 只移除 console.log，保留其他
      ecma: 2015,
      keep_classnames: false,
      keep_fnames: false,
      compress: {
        drop_console: true, // 移除所有 console
        pure_funcs: ['console.log'],
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
    config.optimization.minimizer(`js-${jsMinifier}`).use(TerserPlugin, [
      {
        extractComments: false,
        minify,
        terserOptions,
      },
    ]);
  }

  let cssMinify: any;
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
    minimizerOptions = { preset: ['default', { discardComments: { removeAll: true } }] };
  }
  minimizerOptions = {
    ...minimizerOptions,
    ...cssMinifierOptions,
  };

  if (cssMinifier !== CSSMinifier.none) {
    config.optimization.minimizer(`css-${cssMinifier}`).use(CSSMinimizerWebpackPlugin, [
      {
        minify: cssMinify,
        minimizerOptions,
      },
    ]);
  }
}

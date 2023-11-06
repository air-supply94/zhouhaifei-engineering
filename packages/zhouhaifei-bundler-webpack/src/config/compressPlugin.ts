import CSSMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import type { TerserOptions } from 'terser-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { interfaces } from '../types';
import { getEsBuildTarget } from '../utils/getEsBuildTarget';
import type { TransformOptions as EsbuildOptions } from '@zhouhaifei/bundler-utils/bundless/esbuild';

export function compressPlugin({
  userConfig: {
    jsMinifier,
    cssMinifier,
    targets,
    jsMinifierOptions,
    cssMinifierOptions,
  },
  isDevelopment,
  config,
}: interfaces.ApplyOptions) {
  if (
    isDevelopment ||
    process.env.COMPRESS === 'none' ||
    (jsMinifier === interfaces.JSMinifier.none && cssMinifier === interfaces.CSSMinifier.none)
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
  let terserOptions: interfaces.UserConfig['jsMinifierOptions'];
  if (jsMinifier === interfaces.JSMinifier.esbuild) {
    minify = TerserPlugin.esbuildMinify;
    terserOptions = {
      target: esbuildTarget,

      // remove all comments
      legalComments: 'none',
      ...jsMinifierOptions,
    } as EsbuildOptions;
  } else if (jsMinifier === interfaces.JSMinifier.terser) {
    minify = TerserPlugin.terserMinify;
    terserOptions = {
      format: { comments: false },
      ...jsMinifierOptions,
    } as TerserOptions;
  }

  if (jsMinifier !== interfaces.JSMinifier.none) {
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
  let minimizerOptions: interfaces.UserConfig['cssMinifierOptions'];
  if (cssMinifier === interfaces.CSSMinifier.esbuild) {
    cssMinify = CSSMinimizerWebpackPlugin.esbuildMinify;
    minimizerOptions = { target: esbuildTarget } as EsbuildOptions;
  } else if (cssMinifier === interfaces.CSSMinifier.cssnano) {
    cssMinify = CSSMinimizerWebpackPlugin.cssnanoMinify;
  }
  minimizerOptions = {
    ...minimizerOptions,
    ...cssMinifierOptions,
  };

  if (cssMinifier !== interfaces.CSSMinifier.none) {
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

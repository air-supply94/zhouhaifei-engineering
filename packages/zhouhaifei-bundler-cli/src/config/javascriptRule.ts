import { getBabelConfig } from '@zhouhaifei/babel-preset';
import webpack from 'webpack';
import type { ApplyOptions } from '../types';
import { Transpiler } from '../types';
import { getBrowsersList } from '../utils';

export function javascriptRule({
  config,
  cwd,
  userConfig: {
    babelExtraPreset,
    babelExtraPlugins,
    babelPresetEnv,
    babelPresetReact,
    babelPresetTypeScript,
    babelPluginTransformRuntime,
    babelPluginDecorators,
    babelPluginStyledComponents,
    transpiler,
    reactRefresh,
    babelLoaderOptions,
    esbuildLoaderOptions,
    extraJsModuleIncludes,
    targets,
  },
}: ApplyOptions) {
  const jsResource = /\.(js|mjs|cjs|jsx|ts|tsx)$/;
  const rules = [
    config.module
      .rule('jsAndJsx')
      .test(jsResource)
      .exclude.add(/node_modules/)
      .end()
      .include.add(cwd)
      .end(),

    extraJsModuleIncludes &&
      config.module.rule('extraJsAndJsx').test(jsResource).include.add(extraJsModuleIncludes).end(),
  ].filter(Boolean);

  rules.forEach((rule) => {
    if (transpiler === Transpiler.esbuild) {
      rule
        .use('esbuild-loader')
        .loader('esbuild-loader')
        .options({
          target: 'es2015',
          ...esbuildLoaderOptions,
        });

      config.plugin('react-provide-plugin').use(webpack.ProvidePlugin, [{ React: 'react' }]);
    } else if (transpiler === Transpiler.babel) {
      const { presets, plugins } = getBabelConfig({
        babelExtraPreset,
        babelExtraPlugins,
        babelPresetEnv,
        babelPresetReact,
        babelPresetTypeScript,
        babelPluginTransformRuntime,
        babelPluginDecorators,
        babelPluginStyledComponents,
      });

      const extraBabelPlugins: any[] = [reactRefresh && 'react-refresh/babel'].filter(Boolean);

      rule
        .use('babel-loader')
        .loader('babel-loader')
        .options({
          sourceType: 'unambiguous', // 自动处理es和js模块
          babelrc: false,
          configFile: false,
          cacheDirectory: true,
          browserslistConfigFile: false,
          targets: getBrowsersList(targets),
          ...babelLoaderOptions,
          presets,
          plugins: plugins.concat(extraBabelPlugins),
        });
    }
  });
}

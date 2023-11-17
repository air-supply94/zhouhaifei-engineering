import type { WebpackApplyOptions } from '../types';
import { Transpiler } from '../types';
import { getBrowsersList } from '../utils';
import { getBabelConfig } from '@zhouhaifei/babel-preset';
import webpack from 'webpack';
import path from 'path';

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
    threadLoaderOptions,
    extraJsModuleIncludes,
    targets,
  },
}: WebpackApplyOptions) {
  const jsResource = /\.(js|mjs|cjs|jsx|ts|tsx)$/;
  const rules = [
    config
      .module
      .rule('jsAndJsx')
      .test(jsResource)
      .exclude
      .add(/node_modules/)
      .end()
      .include
      .add(cwd)
      .end(),

    extraJsModuleIncludes && config
      .module
      .rule('extraJsAndJsx')
      .test(jsResource)
      .include
      .add(
        extraJsModuleIncludes.map((item) => {
          if (item instanceof RegExp) {
            return item;
          }

          if (path.isAbsolute(item)) {
            return item;
          }

          if (item.endsWith('./')) {
            return path.resolve(cwd, item);
          }

          return path.dirname(require.resolve(item));
        })
      )
      .end(),
  ]
    .filter(Boolean);

  rules.forEach((rule) => {
    if (transpiler === Transpiler.esbuild) {
      rule.use('esbuild-loader')
        .loader(require.resolve('esbuild-loader'))
        .options({
          target: 'es2015',
          ...esbuildLoaderOptions,
        });

      config.plugin('react-provide-plugin')
        .use(webpack.ProvidePlugin, [{ React: 'react' }]);
    } else if (transpiler === Transpiler.babel) {
      const {
        presets,
        plugins,
      } = getBabelConfig({
        babelExtraPreset,
        babelExtraPlugins,
        babelPresetEnv,
        babelPresetReact,
        babelPresetTypeScript,
        babelPluginTransformRuntime,
        babelPluginDecorators,
        babelPluginStyledComponents,
      });

      if (threadLoaderOptions) {
        rule.use('thread-loader')
          .loader(require.resolve('thread-loader'))
          .options({
            // additional node.js arguments
            workerNodeArgs: ['--max-old-space-size=1024'],
            ...threadLoaderOptions,
          });
      }

      const extraBabelPlugins: any[] = [reactRefresh && require.resolve('react-refresh/babel')].filter(Boolean);

      rule.use('babel-loader')
        .loader(require.resolve('babel-loader'))
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

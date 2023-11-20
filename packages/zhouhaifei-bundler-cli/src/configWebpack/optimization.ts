import type { WebpackApplyOptions } from '../types';
import { CodeSplit } from '../types';

export function optimization({
  config,
  isDevelopment,
  userConfig: { codeSplitting },
}: WebpackApplyOptions) {
  if (isDevelopment) {
    return;
  }

  const minSize = 1024 * 20;
  let id = 0;
  config
    .optimization
    .concatenateModules(true)
    .moduleIds('deterministic')
    .chunkIds('deterministic')
    .runtimeChunk('single');

  // 参考umi
  switch (codeSplitting) {
    case CodeSplit.depPerChunk:
      config.optimization.splitChunks({
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'all',
            minSize,
            minChunks: 1,
            name(module) {
              const path = module.context.replace(/.pnpm[\\/]/, '');
              const match = path.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              if (!match) {
                return 'unknown';
              }
              const packageName = match[1];
              return packageName
                .replace(/[\\/]/g, '-')
                .replace(/[^\-\w]/g, '');
            },
          },
        },
      });
      break;

    case CodeSplit.granularChunks: {
      const FRAMEWORK_BUNDLES = [
        'react-dom',
        'react',
        'redux',
        'react-redux',
        'mobx',
        'mobx-react',
        'history',
        'react-router',
        'react-router-dom',
      ];
      config.optimization.splitChunks({
        cacheGroups: {
          default: false,
          defaultVendors: false,
          framework: {
            name: 'framework',
            test: new RegExp(
              `[\\\\/]node_modules[\\\\/](${FRAMEWORK_BUNDLES.join(
                '|'
              )})[\\\\/]`
            ),
            chunks: 'all',
            minChunks: 1,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module: any) {
              return (
                !isModuleCSS(module) &&
                module.size() > minSize &&
                /node_modules[/\\]/.test(module.identifier())
              );
            },
            name(module: any) {
              const rawRequest =
                module.rawRequest &&
                module.rawRequest.replace(/^@(\w+)[/\\]/, '$1-');
              if (rawRequest) {
                return `${

                  // when `require()` a package with relative path,
                  // need remove leading `.` and `/`, otherwise will not found `.js` file
                  // e.g. require('../../lib/codemirror')
                  rawRequest.replace(/\./g, '_')
                    .replace(/\//g, '-')
                }-lib`;
              }

              const identifier = module.identifier();
              const trimmedIdentifier = /(?:^|[/\\])node_modules[/\\](.*)/.exec(
                identifier
              );
              const processedIdentifier =
                trimmedIdentifier &&
                trimmedIdentifier[1].replace(/^@(\w+)[/\\]/, '$1-');

              return `${processedIdentifier || identifier}-lib`;
            },
            minSize,
            priority: 30,
            reuseExistingChunk: true,
            chunks: 'all',
            minChunks: 1,
          },
          shared: {
            name: () => `shared-${++id}`,
            minSize,
            priority: 10,
            reuseExistingChunk: true,
            chunks: 'all',
            minChunks: 2,
          },
        },
      });
    }
      break;
  }
}

function isModuleCSS(module: { type: string; }) {
  return (

    // mini-css-extract-plugin
    module.type === 'css/mini-extract' ||

    // extract-css-chunks-webpack-plugin (old)
    module.type === 'css/extract-chunks' ||

    // extract-css-chunks-webpack-plugin (new)
    module.type === 'css/extract-css-chunks'
  );
}

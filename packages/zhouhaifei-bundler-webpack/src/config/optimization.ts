import { interfaces } from '../types';
import crypto from 'crypto';

export function optimization({
  config,
  isProduction,
  cwd,
  userConfig: { codeSplitting },
}: interfaces.ApplyOptions) {
  config
    .optimization
    .concatenateModules(true)
    .moduleIds('deterministic')
    .chunkIds('deterministic')
    .runtimeChunk('single');

  if (!isProduction) {
    return;
  }

  // 参考umi
  switch (codeSplitting) {
    case interfaces.CodeSplit.depPerChunk:
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'all',
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

    case interfaces.CodeSplit.granularChunks: {
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
        chunks: 'all',
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
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module: any) {
              return (
                !isModuleCSS(module) &&
                module.size() > 160000 &&
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
            priority: 30,
            reuseExistingChunk: true,
            chunks: 'all',
          },
          shared: {
            name(_module: any, chunks: any) {
              const cryptoName = crypto
                .createHash('sha1')
                .update(
                  chunks.reduce((acc: any, chunk: any) => {
                    return acc + chunk.name;
                  }, '')
                )
                .digest('base64')

                // replace `+=/` that may be escaped in the url
                // https://github.com/umijs/umi/issues/9845
                .replace(/\//g, '')
                .replace(/\+/g, '-')
                .replace(/[=]/g, '_');
              return `shared-${cryptoName}`;
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
            chunks: 'all',
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

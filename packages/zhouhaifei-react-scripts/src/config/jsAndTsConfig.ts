import { paths } from './paths';
import { utils } from './utils';

const parseJs = utils.isDevelopment && utils.useEsBuild
  ? {
    loader: 'esbuild-loader',
    options: {
      loader: 'tsx',
      target: 'es2015',
    },
  }
  : {
    use: [
      {
        loader: 'thread-loader',
        options: {
          // additional node.js arguments
          workerNodeArgs: ['--max-old-space-size=1024'],
        },
      },
      {
        loader: 'babel-loader',
        options: {
          sourceType: 'unambiguous', // 自动处理es和js模块
          cacheDirectory: true,

          // See #6846 for context on why cacheCompression is disabled
          cacheCompression: false,
          compact: utils.isProduction,
          ...utils.babel.options,
        },
      },
    ].filter(Boolean),
  };

export const jsAndTsConfig = [
  {
    test: /\.m?js/,
    resolve: { fullySpecified: false },
    include: [paths.appNodeModules],
  },
  {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: [
      paths.appSrc,
      ...utils.babel.include,
    ],
    ...parseJs,
  },
];

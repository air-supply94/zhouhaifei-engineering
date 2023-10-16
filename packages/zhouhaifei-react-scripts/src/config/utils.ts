import { getPublicUrlOrPath } from '../react-dev-utils/getPublicUrlOrPath';
import fs from 'fs';
import { paths } from './paths.js';

function getBaseConfig(oldConfig) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isProduction = process.env.NODE_ENV === 'production';
  const publicUrlOrPath = getPublicUrlOrPath(
    isDevelopment,
    '',
    process.env.PUBLIC_URL
  );

  let sourceMap = typeof process.env.SOURCEMAP === 'string' && process.env.SOURCEMAP.toLocaleUpperCase() === 'FALSE' ? false : process.env.SOURCEMAP;
  if (sourceMap !== false && !sourceMap) {
    sourceMap = isProduction ? 'source-map' : 'cheap-module-source-map';
  }

  return {
    ...oldConfig,
    ...paths,
    isProduction,
    isDevelopment,
    publicUrlOrPath,
    sourceMap,
    resourceName: {
      css: 'css',
      js: 'js',
      image: 'image',
      media: 'media',
    },
    exclude: [/node_modules/],
  };
}

function getDevServerConfig(oldConfig) {
  const port = parseInt(process.env.PORT, 10) || 3000;
  const host = process.env.HOST || '0.0.0.0';
  const sockHost = process.env.WDS_SOCKET_HOST;
  const sockPath = process.env.WDS_SOCKET_PATH;
  const sockPort = process.env.WDS_SOCKET_PORT;
  const protocol = typeof process.env.HTTPS === 'string' && process.env.HTTPS.toLocaleUpperCase() === 'YES' ? 'https' : 'http';

  return {
    ...oldConfig,
    port,
    host,
    sockHost,
    sockPath,
    sockPort,
    protocol,
  };
}

function getPerformanceConfig(oldConfig) {
  const imageInlineSizeLimit = parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT, 10) || 1024;
  const splitChunkMinSize = parseInt(process.env.SPLIT_CHUNK_MIN_SIZE, 10) || 0;
  const isStartServiceWorker = typeof process.env.SERVICE_WORKER === 'string' && process.env.SERVICE_WORKER.toLocaleUpperCase() === 'YES';
  const allowEslint = typeof process.env.ALLOW_ESLINT === 'string' && process.env.ALLOW_ESLINT.toLocaleUpperCase() !== 'NO';
  const checkTs = typeof process.env.CHECK_TS === 'string' && process.env.CHECK_TS.toLocaleUpperCase() !== 'NO';
  const isAnalyze = typeof process.env.IS_ANALYZE === 'string' && process.env.IS_ANALYZE.toLocaleUpperCase() === 'YES';
  const isCompress = typeof process.env.IS_COMPRESS === 'string' && process.env.IS_COMPRESS.toLocaleUpperCase() === 'YES';
  const useEsBuild = typeof process.env.USE_ESBUILD === 'string' && process.env.USE_ESBUILD.toLocaleUpperCase() === 'YES';

  return {
    ...oldConfig,
    useEsBuild,
    imageInlineSizeLimit,
    splitChunkMinSize,
    isStartServiceWorker,
    allowEslint,
    isAnalyze,
    isCompress,
    checkTs,
  };
}

function getUserConfig(oldConfig) {
  const baseConfig = {
    less: {
      theme: {},
      moduleInclude: [],
    },
    babel: {
      options: {},
      include: [],
    },
    otherConfig: {},
  };

  if (fs.existsSync(paths.configFile)) {
    try {
      const userConfig: any = {};
      if (typeof userConfig === 'object' && userConfig !== null) {
        // 其它配置
        if ('otherConfig' in userConfig) {
          baseConfig.otherConfig = userConfig.otherConfig || {};
        }

        // less配置
        if (userConfig.less) {
          if (userConfig.less.theme) {
            baseConfig.less.theme = userConfig.less.theme;
          }

          if (userConfig.less.moduleInclude) {
            baseConfig.less.moduleInclude = userConfig.less.moduleInclude;
          }
        }

        // babel配置
        if (userConfig.babel) {
          if (userConfig.babel.options) {
            baseConfig.babel.options = userConfig.babel.options;
          }

          if (userConfig.babel.include) {
            baseConfig.babel.include = userConfig.babel.include;
          }
        }
      }
    } catch (e) {
      console.log(e);
      console.log('config.js 必须导出为函数');
    }
  }

  return {
    ...oldConfig,
    ...baseConfig,
  };
}

function getConfig(configPipe) {
  return configPipe.reduce((prev, current) => current(prev), {});
}

export const utils = getConfig([
  getBaseConfig,
  getDevServerConfig,
  getPerformanceConfig,
  getUserConfig,
]);

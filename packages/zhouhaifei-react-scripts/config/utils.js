const fs = require('fs');
const path = require('path');
const getPublicUrlOrPath = require('../react-dev-utils/getPublicUrlOrPath');
const paths = require('./paths');

// format from env
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';
let sourceMap = process.env.SOURCEMAP === 'false' ? false : process.env.SOURCEMAP;
const imageInlineSizeLimit = parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT, 10) || 1024;
const port = parseInt(process.env.PORT, 10) || 3000;
const splitChunkMinSize = parseInt(process.env.SPLIT_CHUNK_MIN_SIZE, 10) || 0;
const host = process.env.HOST || '0.0.0.0';
const sockHost = process.env.WDS_SOCKET_HOST;
const sockPath = process.env.WDS_SOCKET_PATH; // default: '/sockjs-node'
const sockPort = process.env.WDS_SOCKET_PORT;
const isMock = typeof process.env.MOCK === 'string' && process.env.MOCK.toLocaleUpperCase() === 'YES';
const isStartServiceWorker = typeof process.env.SERVICE_WORKER === 'string' && process.env.SERVICE_WORKER.toLocaleUpperCase() === 'YES';
const allowEslint = typeof process.env.ALLOW_ESLINT === 'string' && process.env.ALLOW_ESLINT.toLocaleUpperCase() !== 'NO';
const isAnalyze = typeof process.env.IS_ANALYZE === 'string' && process.env.IS_ANALYZE.toLocaleUpperCase() === 'YES';
const useEsBuild = typeof process.env.USE_ESBUILD === 'string' && process.env.USE_ESBUILD.toLocaleUpperCase() === 'YES';
const isCompress = typeof process.env.IS_COMPRESS === 'string' && process.env.IS_COMPRESS.toLocaleUpperCase() === 'YES';

if (sourceMap !== false && !sourceMap) {
  if (isProduction) {
    sourceMap = 'source-map';
  } else {
    sourceMap = 'cheap-module-source-map';
  }
}

const publicUrlOrPath = getPublicUrlOrPath(
  isDevelopment,
  require(paths.appPackageJson).homepage,
  process.env.PUBLIC_URL
);

const config = {
  // init
  paths,
  isProduction,
  isDevelopment,
  resourceName: {
    css: 'css',
    js: 'js',
    image: 'image',
    media: 'media',
  },
  exclude: [/node_modules/],
  otherConfig: {},

  // env
  allowEslint,
  isStartServiceWorker,
  isMock,
  splitChunkMinSize,
  sockHost,
  sockPath,
  sockPort,
  host,
  port,
  imageInlineSizeLimit,
  sourceMap,
  isAnalyze,
  publicUrlOrPath,
  useEsBuild,
  isCompress,

  // user
  less: {
    theme: {},
    moduleInclude: [],
  },
  babel: {
    options: {},
    include: [],
  },
};

function formatUserConfig(originConfig) {
  function hasProperty(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  const outConfig = path.resolve(paths.configDir, 'config.js');
  if (fs.existsSync(outConfig)) {
    try {
      const userConfig = require(outConfig)({ ...originConfig });
      if (typeof userConfig === 'object' && userConfig !== null) {
        // 其它配置
        if (hasProperty(userConfig, 'otherConfig')) {
          originConfig.otherConfig = userConfig.otherConfig;
        }

        // less配置
        if (userConfig.less) {
          if (userConfig.less.theme) {
            originConfig.less.theme = userConfig.less.theme;
          }
          if (userConfig.less.moduleInclude) {
            originConfig.less.moduleInclude = userConfig.less.moduleInclude;
          }
        }

        // babel配置
        if (userConfig.babel) {
          if (userConfig.babel.options) {
            originConfig.babel.options = userConfig.babel.options;
          }
          if (userConfig.babel.include) {
            originConfig.babel.include = userConfig.babel.include;
          }
        }
      }
    } catch (e) {
      console.log(e);
      console.log('config.js 必须导出为函数');
    }
  }
}

formatUserConfig(config);

module.exports = config;

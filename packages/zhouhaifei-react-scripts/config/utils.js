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
const isStartServiceWorker = process.env.SERVICE_WORKER.toLocaleUpperCase() === 'YES';
const allowEslint = process.env.ALLOW_ESLINT.toLocaleUpperCase() !== 'NO';
const allowStylelint = process.env.ALLOW_STYLELINT.toLocaleUpperCase() === 'YES';

if (sourceMap !== false && !sourceMap) {
  if (isProduction) {
    sourceMap = 'source-map';
  } else {
    sourceMap = 'cheap-module-source-map';
  }
}

module.exports = {
  allowStylelint,
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
  isProduction,
  isDevelopment,
  resourceName: {
    css: 'css',
    js: 'js',
    image: 'image',
    media: 'media',
  },
  exclude: [/node_modules/],
};

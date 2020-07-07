const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';
const isProductionProfile = isProduction && process.argv.includes('--profile');
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const shouldInlineRuntimeChunk = process.env.INLINE_RUNTIME_CHUNK !== 'false';
const isExtendingEslintConfig = process.env.EXTEND_ESLINT === 'true';
const imageInlineSizeLimit = parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT, 10) || 1024;
const port = parseInt(process.env.PORT, 10) || 3000;
const splitChunkMinSize = parseInt(process.env.SPLIT_CHUNK_MIN_SIZE, 10) || 0;
const host = process.env.HOST || '0.0.0.0';
const sockHost = process.env.WDS_SOCKET_HOST;
const sockPath = process.env.WDS_SOCKET_PATH; // default: '/sockjs-node'
const sockPort = process.env.WDS_SOCKET_PORT;

module.exports = {
  splitChunkMinSize,
  sockHost,
  sockPath,
  sockPort,
  host,
  port,
  imageInlineSizeLimit,
  shouldInlineRuntimeChunk,
  isExtendingEslintConfig,
  shouldUseSourceMap,
  isProductionProfile,
  isProduction,
  isDevelopment,
  resourceName: {
    css: 'css',
    js: 'js',
    image: 'image',
    media: 'media',
  },
};

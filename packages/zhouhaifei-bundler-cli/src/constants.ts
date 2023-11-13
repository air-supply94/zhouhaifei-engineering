import fs from 'fs';
import path from 'path';

export const { version } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
  .toString());
export const STYLE_EXTENSIONS = [
  'css',
  'less',
  'sass',
  'scss',
  'styl',
  'stylus',
];
export const LOCAL_IDENT_NAME = '[name]__[local]--[hash:base64:8]';
export const DEFAULT_DEV_DEVTOOL = 'cheap-module-source-map';
export const DEFAULT_BUILD_DEVTOOL = 'source-map';
export const DEFAULT_OUTPUT_PATH = 'dist';
export const DEFAULT_SRC_DIR = 'src';
export const DEFAULT_PUBLIC_DIR = 'public';
export const DEFAULT_BROWSER_TARGETS = {
  chrome: 80,
  edge: 79,
  firefox: 78,

  // 低于11,esbuild会报错
  safari: 11,
};

export const DEFAULT_ESBUILD_TARGET_KEYS = [
  'chrome',
  'edge',
  'firefox',
  'safari',
];

export const DEFAULT_CONFIG_NAME = 'bundlerConfig';
export const cwd = fs.realpathSync(process.cwd());


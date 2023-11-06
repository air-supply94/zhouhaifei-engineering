import fs from 'fs';
import path from 'path';

export const { version } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
  .toString());

export const DEFAULT_DEV_DEVTOOL = 'cheap-module-source-map';
export const DEFAULT_BUILD_DEVTOOL = 'source-map';
export const DEFAULT_OUTPUT_PATH = 'dist';
export const DEFAULT_BROWSER_TARGETS = {
  chrome: 80,
  edge: 79,
  firefox: 80,

  // 低于11,esbuild会报错
  safari: 11,
};

export const DEFAULT_ESBUILD_TARGET_KEYS = [
  'chrome',
  'edge',
  'firefox',
  'safari',
];

export const DEFAULT_CONFIG_NAME = '.bundlerConfig';


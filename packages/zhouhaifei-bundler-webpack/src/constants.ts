import fs from 'fs';
import path from 'path';

export const { version } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8').toString());

export const DEFAULT_DEV_DEVTOOL = 'cheap-module-source-map';
export const DEFAULT_BUILD_DEVTOOL = 'source-map';
export const DEFAULT_OUTPUT_PATH = 'dist';
export const DEFAULT_BROWSER_TARGETS = {
  Chrome: 80,
  Edge: 79,
  Safari: 10.1,
  Firefox: 80,
};

export const DEFAULT_CONFIG_NAME = '.bundlerWebpackConfig';


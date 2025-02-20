import fs from 'node:fs';
import path from 'node:path';
import { tryFiles } from './utils';

export const { version } = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8').toString());
export const STYLE_EXTENSIONS = ['css', 'less', 'sass', 'scss'];
export const LOCAL_IDENT_NAME = '[name]__[local]--[hash:base64:8]';
export const DEFAULT_DEV_DEVTOOL = 'cheap-module-source-map';
export const DEFAULT_BUILD_DEVTOOL = 'source-map';
export const DEFAULT_OUTPUT_PATH = 'dist';
export const DEFAULT_SRC_DIR = 'src';
export const DEFAULT_PUBLIC_DIR = 'public';
export const DEFAULT_BROWSER_TARGETS = {
  chrome: 87,
  edge: 88,
  firefox: 78,
  safari: 13,
};

export const DEFAULT_ESBUILD_TARGET_KEYS = Object.keys(DEFAULT_BROWSER_TARGETS);

export const DEFAULT_CONFIG_NAME = 'bundlerConfig';
export const cwd = fs.realpathSync(process.cwd());

export const USER_CONFIG_FILE = tryFiles(
  [`${DEFAULT_CONFIG_NAME}.ts`, `${DEFAULT_CONFIG_NAME}.js`, `${DEFAULT_CONFIG_NAME}.mjs`].map((item) =>
    path.resolve(cwd, item),
  ),
);

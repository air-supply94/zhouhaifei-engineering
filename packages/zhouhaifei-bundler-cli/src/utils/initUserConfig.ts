import path from 'node:path';
import {
  DEFAULT_BROWSER_TARGETS,
  DEFAULT_BUILD_DEVTOOL,
  DEFAULT_DEV_DEVTOOL,
  DEFAULT_OUTPUT_PATH,
  DEFAULT_PUBLIC_DIR,
  cwd,
} from '../constants';
import type { UserConfig, cliOptions } from '../types';
import { CSSMinifier, CodeSplit, Env, JSMinifier, Transpiler } from '../types';

export function initUserConfig(userConfig: UserConfig, cliOptions: cliOptions = {}): UserConfig {
  userConfig.processEnvPrefix ||= /^REACT_APP_/i;

  userConfig.proxy ||= [];
  userConfig.publicDir ||= DEFAULT_PUBLIC_DIR;

  userConfig.open ||= cliOptions.open;
  userConfig.watch ||= cliOptions.watch;
  userConfig.host ||= cliOptions.host || process.env.HOST || '0.0.0.0';
  userConfig.port ||= Number.parseInt(cliOptions.port, 10) || Number.parseInt(process.env.PORT, 10) || 3000;

  userConfig.nocompress ||= process.env.COMPRESS === '1';
  userConfig.analyzer ||= process.env.ANALYZE === '1';
  userConfig.analyzerPort ||= Number.parseInt(process.env.ANALYZE_PORT, 10) || 8888;

  userConfig.publicPath ||= process.env.PUBLIC_URL || '/';
  if (!userConfig.publicPath.endsWith('/')) {
    userConfig.publicPath += '/';
  }

  userConfig.sourcemap =
    userConfig.sourcemap === false || userConfig.sourcemap
      ? userConfig.sourcemap
      : process.env.NODE_ENV === Env.development
        ? DEFAULT_DEV_DEVTOOL
        : DEFAULT_BUILD_DEVTOOL;
  userConfig.outputPath ||= DEFAULT_OUTPUT_PATH;
  userConfig.externals ||= {};
  userConfig.alias = {
    '@': path.resolve(cwd, 'src'),
    src: path.resolve(cwd, 'src'),
    ...userConfig.alias,
  };

  userConfig.staticPathPrefix ||= 'static/';
  userConfig.codeSplitting ||= CodeSplit.granularChunks;

  userConfig.transpiler ||= Transpiler.esbuild;
  userConfig.jsMinifier ||= JSMinifier.terser;
  userConfig.cssMinifier ||= CSSMinifier.cssnano;
  userConfig.targets ||= DEFAULT_BROWSER_TARGETS;
  userConfig.assetsInlineLimit ||= 1024 * 8;
  userConfig.cache = {
    cacheDirectory: '.cache',
    buildDependencies: [],
    ...userConfig.cache,
  };

  userConfig.lessOptions = {
    javascriptEnabled: true,
    ...userConfig.lessOptions,
  };
  userConfig.sassOptions ||= {};
  userConfig.stylusOptions ||= {};
  userConfig.autoprefixer ||= {};
  userConfig.postcssPresetEnvOptions ||= {};

  return userConfig;
}

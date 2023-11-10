import { getPostcssOptions } from '@zhouhaifei/postcss-preset';
import type { UserConfig, ProxyOptions } from 'vite';
import path from 'path';
import { mergeConfig } from 'vite';
import { LOCAL_IDENT_NAME } from '../constants';
import type { ViteDevOptions } from '../types';
import { getProcessEnv } from '../utils/getProcessEnv';
import { getPlugins } from './getPlugins';
import { getBrowsersList, getEsBuildTarget } from '../utils';

export function config({
  env,
  userConfig,
  userEnv,
  cwd,
}: ViteDevOptions): UserConfig {
  const {
    host,
    port,
    define,
    publicPath,
    open,
    vite,
    alias,
    targets,
    assetsInlineLimit,
    outputPath,
    proxy,
    cache,
    publicDir,
    lessOptions,
    sassOptions,
    stylusOptions,
    autoprefixer,
    postcssPresetEnvOptions,
    extraPostCSSPlugins,
  } = userConfig;

  const defaultConfig: UserConfig = {
    publicDir,
    cacheDir: path.resolve(cwd, cache.cacheDirectory),
    define: {
      'process.env': getProcessEnv(userEnv, publicPath, env),
      ...define,
    },
    resolve: { alias },
    server: {
      host,
      port,
      open,
      proxy: proxy as Record<string, ProxyOptions>,
    },
    build: {
      commonjsOptions: { transformMixedEsModules: true },
      target: getEsBuildTarget(targets),
      assetsInlineLimit,
      outDir: outputPath,
    },
    css: {
      devSourcemap: true,
      modules: {
        scopeBehaviour: 'local',
        generateScopedName: LOCAL_IDENT_NAME,
      },
      preprocessorOptions: {
        less: lessOptions,
        scss: sassOptions,
        styl: stylusOptions,
      },
      postcss: getPostcssOptions({
        browsers: getBrowsersList(targets),
        autoprefixer,
        postcssPresetEnvOptions,
        extraPostCSSPlugins,
      }),
    },
    plugins: getPlugins({ userConfig }),
  };

  return mergeConfig(defaultConfig, vite);
}

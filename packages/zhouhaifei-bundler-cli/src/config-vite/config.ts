import type { UserConfig } from 'vite';
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';
import loadCssModulePlugin from 'vite-plugin-load-css-module';
import requireTransform from 'vite-plugin-require-transform';
import { generateBabelConfig } from '@zhouhaifei/babel-preset';
import { LOCAL_IDENT_NAME, STYLE_EXTENSIONS } from '../constants';
import type { ViteDevOptions } from '../types';
import { getProcessEnv } from '../utils/getProcessEnv';
import path from 'path';

export function config({
  port,
  host,
  env,
  userConfig: {
    define,
    publicPath,
    babelPluginImport,
    autoCSSModules,
    babelExtraPlugins,
    babelPluginDecorators,
    open,
    vite,
  },
  userEnv,
  entryFile,
}: ViteDevOptions): UserConfig {
  const plugins: UserConfig['plugins'] = [
    requireTransform({ fileRegex: /\.(ts|tsx|js|jsx)$/ }),
    createHtmlPlugin({
      minify: true,
      template: 'public/index.html',
    }),
    react({
      babel: {
        plugins: generateBabelConfig({
          babelPluginTransformRuntime: false,
          babelPluginDecorators,
          babelExtraPlugins,
          babelClassProperties: {},
        }).plugins,
      },
    }),

    // 注入引入src/index的script
    {
      name: 'bundler-cli-inject-script',
      transformIndexHtml: () => {
        return [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: `/src/${path.parse(entryFile).base}`,
            },
            injectTo: 'body',
          },
        ];
      },
    },
  ];

  // css-module
  if (autoCSSModules !== false) {
    plugins.push(loadCssModulePlugin({
      include: (id) => {
        if (id.includes('node_modules')) {
          return false;
        }

        if (STYLE_EXTENSIONS.some((item) => id.endsWith(`global.${item}`))) {
          return false;
        }

        return STYLE_EXTENSIONS.some((item) => id.endsWith(`.${item}`));
      },
    }));
  }

  // antd-import
  if (typeof babelPluginImport === 'string') {
    plugins.push(createStyleImportPlugin({
      resolves: [AntdResolve()],
      libs: [
        {
          libraryName: babelPluginImport,
          resolveStyle: (name: string) => `${babelPluginImport}/es/${name}/style`,
        },
      ],
    }));
  }

  const defaultConfig: UserConfig = {
    define: {
      'process.env': getProcessEnv(userEnv, publicPath, env),
      ...define,
    },
    server: {
      host,
      port,
      open,
    },
    build: { commonjsOptions: { transformMixedEsModules: true }},
    css: {
      devSourcemap: true,
      modules: {
        scopeBehaviour: 'local',
        generateScopedName: LOCAL_IDENT_NAME,
      },
      preprocessorOptions: { less: { javascriptEnabled: true }},
    },
    plugins,
  };
  return mergeConfig(defaultConfig, vite);
}

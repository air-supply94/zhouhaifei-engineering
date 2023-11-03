import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';
import loadCssModulePlugin from 'vite-plugin-load-css-module';
import requireTransform from 'vite-plugin-require-transform';
import { generateBabelConfig } from '@zhouhaifei/babel-preset';
import { loadEnv } from '@zhouhaifei/bundler-utils';

function defineEnv() {
  const define = loadEnv(process.cwd(), '.env') || {};
  return Object.keys(define)
    .reduce((prev, key) => {
      prev[`process.env.${key}`] = JSON.stringify(define[key]);
      return prev;
    }, {});
}

export interface GetDefaultViteConfigParams {
  useCreateStyleImportPlugin?: boolean;
}

export function getDefaultViteConfig({
  useCreateStyleImportPlugin = true,
}: GetDefaultViteConfigParams = {}): UserConfig {
  return {
    define: defineEnv(),
    server: {
      host: true,
      port: Number(process.env.PORT) || undefined,
      open: '/',
    },
    build: {
      commonjsOptions: { transformMixedEsModules: true },
      outDir: 'dist',
    },
    css: {
      devSourcemap: true,
      modules: {
        scopeBehaviour: 'local',
        generateScopedName: '[name]__[local]--[hash:base64:8]',
      },
      preprocessorOptions: { less: { javascriptEnabled: true }},
    },
    plugins: [
      loadCssModulePlugin({ include: (id) => id.endsWith('less') && !id.includes('node_modules') && !id.includes('global.less') }),
      requireTransform({ fileRegex: /\.(ts|tsx|js|jsx)$/ }),
      createHtmlPlugin({
        minify: true,
        template: 'public/index.html',
      }),
      useCreateStyleImportPlugin ? createStyleImportPlugin({
        resolves: [AntdResolve()],
        libs: [
          {
            libraryName: 'antd',
            resolveStyle: (name: string) => {
              return `antd/es/${name}/style`;
            },
          },
        ],
      }) : null,
      react({
        babel: {
          plugins: generateBabelConfig({
            pluginTransformRuntime: false,
            classProperties: {},
          }).plugins,
        },
      }),
    ].filter(Boolean),
  };
}

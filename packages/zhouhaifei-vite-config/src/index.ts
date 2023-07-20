import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';
import path from 'path';
import fs from 'fs';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import loadCssModulePlugin from 'vite-plugin-load-css-module';
import requireTransform from 'vite-plugin-require-transform';

const dotenv = path.resolve(process.cwd(), '.env');
const NODE_ENV = process.env.NODE_ENV;
const dotenvFiles = [
  `${dotenv}.${NODE_ENV}.local`,
  `${dotenv}.${NODE_ENV}`,
  dotenv,
].filter(Boolean);

let envConfig: Record<string, string> = {};
dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    const parseConfig = config({ path: dotenvFile });
    envConfig = {
      ...envConfig,
      ...parseConfig?.parsed || {},
    };
    expand(parseConfig);
  }
});

function defineEnv() {
  return Object.keys(envConfig)
    .reduce((prev, key) => {
      prev[`process.env.${key}`] = JSON.stringify(envConfig[key]);
      return prev;
    }, {});
}

export interface GetDefaultViteConfigParams {
  externals?: Record<string, string>;
  useCreateStyleImportPlugin?: boolean;
}

export function getDefaultViteConfig({
  externals,
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
      // 兼容commonjs和esm(此2包commonjs导出的是esm格式)
      (typeof loadCssModulePlugin === 'function' ? loadCssModulePlugin : (loadCssModulePlugin as any).default)({ include: (id) => id.endsWith('less') && !id.includes('node_modules') && !id.includes('global.less') }),
      (typeof requireTransform === 'function' ? requireTransform : (requireTransform as any).default)({ fileRegex: /\.(ts|tsx|js|jsx)$/ }),

      viteExternalsPlugin({
        lodash: '_',
        qs: 'Qs',
        axios: 'axios',
        react: 'React',
        'react-dom': 'ReactDOM',
        moment: 'moment',
        mobx: 'mobx',
        'mobx-react': 'mobxReact',
        'mobx-react-lite': 'mobxReactLite',
        ...externals,
      }),
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
          plugins: [
            [
              require.resolve('@babel/plugin-proposal-decorators'),
              { version: 'legacy' },
            ],
            [
              require.resolve('@babel/plugin-proposal-class-properties'),
              { loose: false },
            ],
          ],
        },
      }),
    ].filter(Boolean),
  };
}

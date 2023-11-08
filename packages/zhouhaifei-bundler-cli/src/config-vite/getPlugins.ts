import type { UserConfig as ViteUserConfig } from 'vite';
import { generateBabelConfig } from '@zhouhaifei/babel-preset';
import { STYLE_EXTENSIONS } from '../constants';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';
import loadCssModulePlugin from 'vite-plugin-load-css-module';
import requireTransform from 'vite-plugin-require-transform';
import type { UserConfig } from '../types';

interface Options {
  userConfig: UserConfig;
}

const bundlerCliInjectScriptPlugin: ViteUserConfig['plugins'][0] = {
  name: 'bundler-cli-inject-script',
  transformIndexHtml: () => {
    return [
      {
        tag: 'script',
        attrs: {
          type: 'module',
          src: '/src/index',
        },
        injectTo: 'body',
      },
    ];
  },
};

export function getPlugins({
  userConfig: {
    babelPluginImport,
    autoCSSModules,
    babelExtraPlugins,
    babelPluginDecorators,
  },
}: Options): ViteUserConfig['plugins'] {
  const plugins: ViteUserConfig['plugins'] = [
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

    bundlerCliInjectScriptPlugin,
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
  return plugins;
}

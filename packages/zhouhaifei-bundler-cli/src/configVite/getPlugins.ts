import type { UserConfig as ViteUserConfig } from 'vite';
import { getBabelConfig } from '@zhouhaifei/babel-preset';
import { STYLE_EXTENSIONS } from '../constants';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import loadCssModulePlugin from 'vite-plugin-load-css-module';
import requireTransform from 'vite-plugin-require-transform';
import type { UserConfig } from '../types';
import { InjectEntryScriptPlugin } from './injectEntryScriptPlugin';

interface Options {
  userConfig: UserConfig;
}

export function getPlugins({
  userConfig: {
    autoCSSModules,
    babelExtraPlugins,
    babelPluginDecorators,
    babelPluginStyledComponents,
    babelClassProperties,
    publicDir,
  },
}: Options): ViteUserConfig['plugins'] {
  const plugins: ViteUserConfig['plugins'] = [
    requireTransform({ fileRegex: /\.(ts|tsx|js|jsx)$/ }),
    createHtmlPlugin({
      minify: true,
      template: `${publicDir}/index.html`,
    }),
    react({
      babel: {
        plugins: getBabelConfig({
          babelPluginTransformRuntime: false,
          babelPluginDecorators,
          babelExtraPlugins,
          babelPluginStyledComponents,
          babelClassProperties: babelClassProperties || {},
        }).plugins,
      },
    }),
    InjectEntryScriptPlugin(),
  ];

  // css-module
  if (autoCSSModules !== false) {
    plugins.push(loadCssModulePlugin({
      include: (id) => {
        if (STYLE_EXTENSIONS.some((item) => id.endsWith(`module.${item}`))) {
          return true;
        }

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

  return plugins;
}

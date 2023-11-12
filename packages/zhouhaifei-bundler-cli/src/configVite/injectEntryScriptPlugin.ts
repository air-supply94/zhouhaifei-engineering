import type { UserConfig } from 'vite';
import { SRC_DIR } from '../constants';

export function InjectEntryScriptPlugin(): UserConfig['plugins'][0] {
  return {
    name: 'bundler-cli-inject-script',
    transformIndexHtml: () => {
      return [
        {
          tag: 'script',
          attrs: {
            type: 'module',
            src: `/${SRC_DIR}/index`,
          },
          injectTo: 'body',
        },
      ];
    },
  };
}
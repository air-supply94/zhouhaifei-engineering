import type { UserConfig } from 'vite';

export function InjectEntryScriptPlugin(): UserConfig['plugins'][0] {
  return {
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
}

import type { pluginOptions } from 'postcss-preset-env';

export interface PostcssConfigOptions {
  browsers?: string[];
  postcssOptions?: { plugins: never } & Record<string, any>;
  postcssPresetEnvOptions?: { autoprefixer?: never } & pluginOptions;
  autoprefixer?: pluginOptions['autoprefixer'];
  extraPostCSSPlugins?: Record<string, Record<string, any>>;
}

export function getPostcssConfig({
  browsers,
  postcssPresetEnvOptions,
  autoprefixer,
  extraPostCSSPlugins,
  postcssOptions,
}: PostcssConfigOptions = {}) {
  return {
    ident: 'postcss',
    plugins: {
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        browsers,
        autoprefixer: {
          remove: false,
          flexbox: 'no-2009',
          ...autoprefixer,
        },
        stage: 3,
        ...postcssPresetEnvOptions,
      } as pluginOptions,
      ...extraPostCSSPlugins,
    },

    ...postcssOptions,
  };
}

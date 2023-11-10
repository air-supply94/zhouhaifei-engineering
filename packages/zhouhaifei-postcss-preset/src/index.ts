import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssPresetEnv from 'postcss-preset-env';
import type { pluginOptions } from 'postcss-preset-env';

export interface GetPostcssConfigOptions {
  browsers?: string[];
  postcssOptions?: { plugins: never; } & Record<string, any>;
  postcssPresetEnvOptions?: { autoprefixer?: never; } & pluginOptions;
  autoprefixer?: pluginOptions['autoprefixer'];
  extraPostCSSPlugins?: any[];
}

export function getPostcssConfig({
  browsers,
  postcssPresetEnvOptions,
  autoprefixer,
  extraPostCSSPlugins,
  postcssOptions,
}: GetPostcssConfigOptions = {}) {
  return {
    ident: 'postcss',
    plugins: [
      postcssFlexbugsFixes,
      postcssPresetEnv({
        browsers,
        autoprefixer: {
          remove: false,
          flexbox: 'no-2009',
          ...autoprefixer,
        },
        stage: 3,
        ...postcssPresetEnvOptions,
      } as pluginOptions),
    ].concat(extraPostCSSPlugins || []),
    ...postcssOptions,
  };
}

import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssPresetEnv from 'postcss-preset-env';

export interface GetPostcssOptions {
  browsers?: string[];
  postcssPresetEnvOptions?: { autoprefixer?: never; } & Record<string, any>;
  autoprefixer?: Record<string, any>;
  extraPostCSSPlugins?: any[];
}

export function getPostcssOptions({
  browsers,
  postcssPresetEnvOptions,
  autoprefixer,
  extraPostCSSPlugins,
}: GetPostcssOptions = {}) {
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
      }),
    ].concat(extraPostCSSPlugins || []),
  };
}

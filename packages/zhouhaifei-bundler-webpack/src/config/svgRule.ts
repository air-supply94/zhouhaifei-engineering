import type { interfaces } from '../types';

export function svgRule({
  config,
  userConfig: {
    svgr,
    inlineLimit,
  },
}: interfaces.ApplyOptions) {
  if (svgr !== false) {
    config
      .module
      .rule('svgr')
      .test(/\.svg$/)
      .issuer(/\.[jt]sx?$/)
      .type('javascript/auto')
      .use('svgr-loader')
      .loader(require.resolve('@svgr/webpack'))
      .options({
        prettier: false,
        svgo: false,
        svgoConfig: { plugins: [{ removeViewBox: false }]},
        titleProp: true,
        ref: true,
        ...svgr,
      })
      .end()
      .use('url-loader')
      .loader(require.resolve('url-loader'))
      .options({
        limit: inlineLimit,
        fallback: require.resolve('file-loader'),
      })
      .end();
  }
}

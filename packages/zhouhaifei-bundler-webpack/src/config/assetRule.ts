import type { interfaces } from '../types';

export function assetRule({
  config,
  userConfig: { inlineLimit },
}: interfaces.ApplyOptions) {
  config
    .module
    .rule('asset')
    .oneOf('avif')
    .test(/\.avif$/)
    .type('asset')
    .mimetype('image/avif')
    .parser({ dataUrlCondition: { maxSize: inlineLimit }});

  config
    .module
    .rule('asset')
    .oneOf('image')
    .test(/\.(bmp|gif|jpg|jpeg|png)$/)
    .type('asset')
    .parser({ dataUrlCondition: { maxSize: inlineLimit }});

  config
    .module
    .rule('asset')
    .oneOf('fallback')
    .exclude
    .add(/^$/) /* handle data: resources */
    .add(/\.(js|mjs|cjs|jsx|ts|tsx)$/)
    .add(/\.(css|less|sass|scss|styl|stylus)$/)
    .add(/\.html$/)
    .add(/\.mdx?$/)
    .add(/\.json$/)
    .end()
    .type('asset/resource');
}

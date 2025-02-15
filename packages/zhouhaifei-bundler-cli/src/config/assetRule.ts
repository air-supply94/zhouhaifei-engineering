import type { ApplyOptions } from '../types';

export function assetRule({ config, userConfig: { assetsInlineLimit } }: ApplyOptions) {
  config.module
    .rule('asset')
    .oneOf('avif')
    .test(/\.avif$/)
    .type('asset')
    .mimetype('image/avif')
    .parser({ dataUrlCondition: { maxSize: assetsInlineLimit } });

  config.module
    .rule('asset')
    .oneOf('image')
    .test(/\.(bmp|gif|jpg|jpeg|png|svg|webp)$/)
    .type('asset')
    .parser({ dataUrlCondition: { maxSize: assetsInlineLimit } });

  config.module
    .rule('asset')
    .oneOf('fallback')
    .exclude.add(/^$/) /* handle data: resources */
    .add(/\.(js|mjs|cjs|jsx|ts|tsx)$/)
    .add(/\.(css|less|sass|scss)$/)
    .add(/\.html$/)
    .add(/\.mdx?$/)
    .add(/\.json$/)
    .end()
    .type('asset/resource');
}

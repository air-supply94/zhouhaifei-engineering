import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { interfaces } from '../types';

export function bundleAnalyzerPlugin({
  config,
  isProduction,
  userConfig: { analyze },
}: interfaces.ApplyOptions) {
  if (isProduction && (process.env.ANALYZE === '1' || analyze)) {
    config
      .plugin('webpack-bundle-analyzer')
      .use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'server',
          analyzerPort: process.env.ANALYZE_PORT || 8888,
          openAnalyzer: true,
          logLevel: 'info',
          defaultSizes: 'parsed',
          ...analyze,
        },
      ]);
  }
}

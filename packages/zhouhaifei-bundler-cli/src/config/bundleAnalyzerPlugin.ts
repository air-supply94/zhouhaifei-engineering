import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { ApplyOptions } from '../types';

export function bundleAnalyzerPlugin({
  config,
  isDevelopment,
  userConfig: {
    analyzer,
    analyzerPort,
  },
}: ApplyOptions) {
  if (!isDevelopment && analyzer) {
    config
      .plugin('webpack-bundle-analyzer')
      .use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'server',
          analyzerPort,
          openAnalyzer: true,
          logLevel: 'info',
          defaultSizes: 'parsed',
          ...analyzer,
        },
      ]);
  }
}

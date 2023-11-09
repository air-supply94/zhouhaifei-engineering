import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { WebpackApplyOptions } from '../types';

export function bundleAnalyzerPlugin({
  config,
  isProduction,
  userConfig: {
    analyzer,
    analyzerPort,
  },
}: WebpackApplyOptions) {
  if (isProduction && analyzer) {
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

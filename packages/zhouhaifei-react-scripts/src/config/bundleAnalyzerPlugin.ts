import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { interfaces } from '../types';

export function bundleAnalyzerPlugin({
  config,
  env,
  userConfig: { analyze },
}: interfaces.ApplyOptions) {
  if (env === interfaces.Env.production && analyze) {
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

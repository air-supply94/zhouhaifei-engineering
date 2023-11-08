import webpackBar from 'webpackbar';
import type { WebpackApplyOptions } from '../types';

export function progressPlugin({ config }: WebpackApplyOptions) {
  config.plugin('progress-plugin').use(webpackBar);
}

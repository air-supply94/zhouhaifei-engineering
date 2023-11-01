import type { interfaces } from '../types';
import webpackBar from 'webpackbar';

export function progressPlugin({ config }: interfaces.ApplyOptions) {
  config.plugin('progress-plugin').use(webpackBar);
}

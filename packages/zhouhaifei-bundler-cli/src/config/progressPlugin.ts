import webpackBar from 'webpackbar';
import type { ApplyOptions } from '../types';

export function progressPlugin({ config }: ApplyOptions) {
  config.plugin('progress-plugin').use(webpackBar);
}

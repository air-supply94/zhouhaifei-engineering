import type { WebpackApplyOptions } from '../types';
import SpeedMeasureWebpackPlugin from 'speed-measure-webpack-plugin';

export function speedMeasurePlugin({ config }: WebpackApplyOptions) {
  config.plugin('speed-measure-webpack-plugin').use(SpeedMeasureWebpackPlugin);
}

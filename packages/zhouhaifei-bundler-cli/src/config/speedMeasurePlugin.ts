import type { ApplyOptions } from '../types';
import SpeedMeasureWebpackPlugin from 'speed-measure-webpack-plugin';

export function speedMeasurePlugin({ config }: ApplyOptions) {
  config.plugin('speed-measure-webpack-plugin').use(SpeedMeasureWebpackPlugin);
}

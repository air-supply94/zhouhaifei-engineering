import SpeedMeasureWebpackPlugin from 'speed-measure-webpack-plugin';
import type { ApplyOptions } from '../types';

export function speedMeasurePlugin({ config }: ApplyOptions) {
  config.plugin('speed-measure-webpack-plugin').use(SpeedMeasureWebpackPlugin);
}

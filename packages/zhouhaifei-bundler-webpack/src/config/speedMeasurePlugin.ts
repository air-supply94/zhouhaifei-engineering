import type { interfaces } from '../types';
import SpeedMeasureWebpackPlugin from 'speed-measure-webpack-plugin';

export function speedMeasurePlugin({ config }: interfaces.ApplyOptions) {
  config.plugin('speed-measure-webpack-plugin').use(SpeedMeasureWebpackPlugin);
}

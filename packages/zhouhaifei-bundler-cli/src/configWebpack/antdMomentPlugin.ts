import AntdMomentWebpackPlugin from '@ant-design/moment-webpack-plugin';
import type { WebpackApplyOptions } from '../types';

export function antdMomentPlugin({
  config,
  userConfig: { antd },
}: WebpackApplyOptions) {
  if (antd.momentPicker) {
    config.plugin('antd-moment-webpack-plugin')
      .use(AntdMomentWebpackPlugin);
  }
}

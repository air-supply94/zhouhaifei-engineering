import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import React from 'react';
import 'dayjs/locale/zh-cn';

export const Locale: React.FC = function(props) {
  return (
    <ConfigProvider locale={zhCN}>
      {props.children}
    </ConfigProvider>
  );
};

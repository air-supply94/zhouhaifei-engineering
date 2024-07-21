import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import React from 'react';

export const Locale: React.FC<React.PropsWithChildren> = function Locale(props) {
  return (
    <ConfigProvider locale={zhCN}>
      {props.children}
    </ConfigProvider>
  );
};


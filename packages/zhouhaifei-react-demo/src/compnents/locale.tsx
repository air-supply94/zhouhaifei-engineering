import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import type React from 'react';

const colors = {
  divide: '#ededed',
  primary: '#3a6ef8',
  // text-标题色
  heading: '#333',
  bg: '#f5f5f5',
};

export const Locale: React.FC<React.PropsWithChildren> = function Locale(props) {
  return (
    <ConfigProvider
      theme={{
        cssVar: { key: 'app' },
        token: {
          colorBgLayout: colors.bg,
          borderRadius: 4,
          blue: colors.primary,
          colorInfo: colors.primary,
          colorLink: colors.primary,
          colorPrimary: colors.primary,
          colorTextBase: colors.heading,
          fontSize: 12,
          colorBorder: colors.divide,
        },
      }}
      getPopupContainer={() =>
        process.env.NODE_ENV === 'development' ? document.querySelector('#root') : document.body
      }
      locale={zhCN}
    >
      {props.children}
    </ConfigProvider>
  );
};

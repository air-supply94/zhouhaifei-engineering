import { history } from '@/history';
import { Locale } from '@/locale';
import { globalStore } from '@/models/global';
import { Routes } from '@/renderRoutes';
import '@/index.less';
import { routes } from '@/routes';
import { Spin } from 'antd';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';

// import 'reflect-metadata';

ReactDOM.render(
  <React.StrictMode>
    <Locale>
      <Provider globalStore={globalStore}>
        <Routes
          history={history}
          loading={<Spin size="large"/>}
          routes={routes}
        />
      </Provider>
    </Locale>
  </React.StrictMode>,
  document.getElementById('root')
);

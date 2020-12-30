import './index.less';
import { Spin } from 'antd';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Locale, RenderRoutes } from 'zhouhaifei-utils';
import { history } from './history';
import { globalStore } from './models/global';
import { routes } from './routes';

// import 'reflect-metadata';

ReactDOM.render(
  <React.StrictMode>
    <Locale>
      <Provider globalStore={globalStore}>
        <RenderRoutes
          history={history}
          loading={<Spin size="large"/>}
          routes={routes}
        />
      </Provider>
    </Locale>
  </React.StrictMode>,
  document.getElementById('root')
);

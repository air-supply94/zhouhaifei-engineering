import './index.less';
import { Spin } from 'antd';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { globalStore } from './models/global';
import { routes } from './routes';
import { Locale, RenderRoutes, browserHistory } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <Locale>
      <Provider globalStore={globalStore}>
        <RenderRoutes
          history={browserHistory}
          loading={<Spin size="large"/>}
          routes={routes}
        />
      </Provider>
    </Locale>
  </React.StrictMode>,
  document.getElementById('root')
);

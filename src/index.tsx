import './global.less';
import { Spin } from 'antd';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { globalModel } from './models/globalModel';
import { routes } from './routes';
import { Locale, RenderRoutes, browserHistory } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <Locale>
      <Provider globalModel={globalModel}>
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

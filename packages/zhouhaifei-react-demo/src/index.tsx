import './global.less';
import { Spin } from 'antd';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { globalModel } from './models/globalModel';
import { routes } from './routes';
import { Locale, RenderRoutes, history } from './utils';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Locale>
        <Provider globalModel={globalModel}>
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
}

render();

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept([
    './routes',
    './utils',
  ], () => {
    render();
  });
}

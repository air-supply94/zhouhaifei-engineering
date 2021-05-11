import './global.less';
import { Spin } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import { routes } from './routes';
import { Locale, RenderRoutes, history } from './utils';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Locale>
        <RenderRoutes
          history={history}
          loading={<Spin size="large"/>}
          routes={routes}
        />
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

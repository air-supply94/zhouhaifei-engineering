import './global.less';
import { Spin } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import { Locale, RenderRoutes, history } from 'zhouhaifei-common';
import { routes } from './routes';
import { webVitals } from './webVitals';

render();

function render() {
  ReactDOM.render(
    <Locale>
      <RenderRoutes
        history={history}
        loading={<Spin size="large"/>}
        routes={routes}
      />
    </Locale>,
    document.getElementById('root')
  );
}

webVitals(console.log);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept([
    './routes',
    './utils',
  ], render);
}

import './global.less';
import { Spin } from 'antd';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Locale, RenderRoutes, history } from 'zhouhaifei-common';
import { globalModel } from './models/globalModel';
import { routes } from './routes';
import { webVitals } from './webVitals';

if (process.env.NODE_ENV === 'development' && typeof process.env.USE_ESBUILD === 'string' && process.env.USE_ESBUILD.toLocaleUpperCase() === 'YES') {
  import('antd/dist/antd.less').then(render);
} else {
  render();
}

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

webVitals(console.log);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept([
    './routes',
    './utils',
  ], render);
}

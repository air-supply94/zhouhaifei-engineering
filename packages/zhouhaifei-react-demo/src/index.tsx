import './global.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RenderRoutes } from './routes';
import { Locale } from './utils';
import { webVitals } from './webVitals';
import './registerServiceWorker';

render();

function render() {
  ReactDOM.createRoot(document.getElementById('root'))
    .render(
      <Locale>
        <BrowserRouter>
          <RenderRoutes/>
        </BrowserRouter>
      </Locale>
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

import './global.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RenderRoutes } from './routes';
import { Locale } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
render();

function render() {
  root.render(
    <Locale>
      <BrowserRouter>
        <RenderRoutes/>
      </BrowserRouter>
    </Locale>
  );
}

// TODO vite的热更新
// @ts-ignore
if (typeof module !== 'undefined' && module.hot) {
  // @ts-ignore
  module.hot.accept([
    './routes',
    './utils',
  ], render);
}

import './global.less';
import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RenderRoutes } from './routes';
import { Locale } from './utils';

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

// @ts-ignore
if (typeof module !== 'undefined' && module.hot) {
  // @ts-ignore
  module.hot.accept([
    './routes',
    './utils',
  ], render);
}

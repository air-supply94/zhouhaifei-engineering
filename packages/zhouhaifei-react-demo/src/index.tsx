import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import 'src/global.css';
import NProgress from 'nprogress';
import { routes } from 'src/routes';
import { Locale } from './compnents/locale';

render();

function RenderRoutes() {
  return useRoutes(routes);
}

function render() {
  NProgress.start();

  function Internal() {
    React.useLayoutEffect(() => {
      NProgress.done();
    }, []);

    return (
      <Locale>
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
      </Locale>
    );
  }

  createRoot(document.getElementById('root')).render(<Internal />);
}

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  module.hot.accept(render);
}

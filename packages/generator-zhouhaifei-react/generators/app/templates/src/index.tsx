import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './global.less';
import NProgress from 'nprogress';
import { Locale } from './compnents/locale';
import { RenderRoutes } from './routes';

render();

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

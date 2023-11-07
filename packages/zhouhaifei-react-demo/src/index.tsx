import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './global.less';
import { RenderRoutes } from './routes';
import { Locale } from './utils';
import NProgress from 'nprogress';

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
          <RenderRoutes/>
        </BrowserRouter>
      </Locale>
    );
  }

  createRoot(document.getElementById('root')).render(<Internal/>);
}

// @ts-ignore
if (typeof module !== 'undefined' && module.hot) {
  // @ts-ignore
  module.hot.accept(render);
}

// .env.development配置相关环境变量
if (process.env.IS_VITE === 'YES') {
  // @ts-ignore
  import.meta.hot.accept();
}


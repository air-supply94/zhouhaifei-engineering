import './global.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RenderRoutes } from './routes';
import { Locale } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
render();

function render() {
  function Internal() {
    React.useLayoutEffect(() => {
      if (process.env.REACT_APP_NPROGRESS === 'YES') {
        // @ts-ignore
        NProgress.done();
      }
    }, []);

    return (
      <Locale>
        <BrowserRouter>
          <RenderRoutes/>
        </BrowserRouter>
      </Locale>
    );
  }

  root.render(<Internal/>);
}

// @ts-ignore
if (typeof module !== 'undefined' && module.hot) {
  // @ts-ignore
  module.hot.accept(render);
}

// .env.development.local配置相关环境变量
if (process.env.IS_VITE === 'YES') {
  // @ts-ignore
  import.meta.hot.accept(render);
}

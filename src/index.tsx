import { Locale } from '@/locale';
import { Global } from '@/models/global';
import { Routes } from '@/renderRoutes';
import '@/index.less';
import { routes } from '@/routes';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';

// import 'reflect-metadata';

ReactDOM.render(
  <React.StrictMode>
    <Locale>
      <Provider global={new Global()}>
        <Routes
          hash
          routes={routes}
        />
      </Provider>
    </Locale>
  </React.StrictMode>,
  document.getElementById('root')
);

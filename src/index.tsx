import { Locale } from '@/locale';
import { Global } from '@/models/global';
import { Routes } from '@/routes';
import '@/index.less';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';

// import 'reflect-metadata';

ReactDOM.render(
  <React.StrictMode>
    <Locale>
      <Provider global={new Global()}>
        <Routes/>
      </Provider>
    </Locale>
  </React.StrictMode>,
  document.getElementById('root')
);

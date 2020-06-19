import { Global } from '@/models/global';
import { Routes } from '@/routes';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.less';

// import 'reflect-metadata';

ReactDOM.render(
  <React.StrictMode>
    <Provider global={new Global()}>
      {Routes()}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

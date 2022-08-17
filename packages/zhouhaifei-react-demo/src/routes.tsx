import React from 'react';
import type { MenuDataItem } from 'zhouhaifei-common';
import { BasicLayout } from './compnents/basicLayout';
import { NotPage } from './pages/404';

const noPage = {
  path: '',
  component: NotPage,
};

export const routes: MenuDataItem[] = [
  {
    component: BasicLayout,
    name: 'app',
    children: [
      {
        exact: true,
        path: '/',
        redirect: '/dashboard',
      },
      {
        path: '/dashboard',
        name: '仪表盘',
        exact: true,
        component: React.lazy(() => import('./pages/dashboard')),
      },
      noPage,
    ],
  },
];

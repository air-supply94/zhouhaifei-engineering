import React from 'react';
import { BasicLayout } from './compnents/BasicLayout';
import { NotAuthority } from './pages/403';
import { NotPage } from './pages/404';
import { MenuDataItem } from './utils';

export const routes: MenuDataItem[] = [
  {
    Component: BasicLayout,
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
        Component: React.lazy(() => import('./pages/dashboard')),
      },
      {
        path: '/403',
        exact: true,
        Component: NotAuthority,
        name: '无权限',
      },
      {
        path: '',
        Component: NotPage,
        name: '无页面',
      },
    ],
  },
];

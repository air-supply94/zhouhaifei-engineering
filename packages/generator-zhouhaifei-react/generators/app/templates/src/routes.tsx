import React from 'react';
import type { MenuDataItem } from 'zhouhaifei-common';

export const routes: MenuDataItem[] = [
  {
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
    ],
  },
];

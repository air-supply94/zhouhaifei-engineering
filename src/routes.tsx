import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { BasicLayout } from './compnents/BasicLayout';
import { NotAuthority } from './pages/403';
import { NotPage } from './pages/404';

export const routes = [
  {
    component: BasicLayout,
    routes: [
      {
        exact: true,
        path: '/',
        redirect: '/dashboard',
      },
      {
        path: '/dashboard',
        icon: <UserOutlined/>,
        exact: true,
        component: React.lazy(() => import('./pages/dashboard')),
        name: '仪表盘',
      },
      {
        path: '/403',
        exact: true,
        component: NotAuthority,
        name: '无权限',
      },
      {
        path: '',
        component: NotPage,
        name: '无页面',
      },
    ],
  },
];

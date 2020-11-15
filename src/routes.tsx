import { BasicLayout, DefaultLayout } from '@/compnents/layouts';
import { NotAuthority } from '@/pages/403';
import { NotPage } from '@/pages/404';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';

export const routes = [
  {
    exact: true,
    path: '/login',
    component: DefaultLayout,
    routes: [{ component: React.lazy(() => import('@/pages/login')) }],
    name: '登陆',
  },
  {
    component: BasicLayout,
    routes: [
      {
        exact: true,
        path: '/',
        redirect: window.envConfig.defaultRedirectUrl,
      },
      {
        path: '/dashboard',
        icon: <UserOutlined/>,
        exact: true,
        component: React.lazy(() => import('@/pages/dashboard')),
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

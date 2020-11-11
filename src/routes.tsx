import { BasicLayout, DefaultLayout } from '@/compnents';
import { renderRoutes } from '@/renderRoutes';
import React from 'react';
import { HashRouter } from 'react-router-dom';

const routes = [
  {
    exact: true,
    path: '/login',
    component: DefaultLayout,
    children: [
      {
        exact: true,
        path: '/login',
        component: React.lazy(() => import('@/pages/login')),
      },
    ],
    title: '登陆',
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        exact: true,
        from: '/',
        to: window.envConfig.defaultRedirectUrl,
      },
      {
        path: '/dashboard',
        exact: true,
        component: React.lazy(() => import('@/pages/dashboard')),
        title: '仪表盘',
      },
      {
        path: '/403',
        exact: true,
        component: React.lazy(() => import('@/pages/403')),
        title: '无权限',
      },
      {
        path: '',
        exact: true,
        component: React.lazy(() => import('@/pages/404')),
        title: '无页面',
      },
    ],
  },
];

export const Routes: React.FC = () => {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  );
};

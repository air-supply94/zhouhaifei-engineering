import { BasicLayout, DefaultLayout, renderRoute } from '@/compnents';
import React from 'react';
import { HashRouter, Switch, Redirect } from 'react-router-dom';

const routesInfo = [
  {
    path: '/dashboard',
    DefaultLayout: BasicLayout,
    LazyComponent: React.lazy(() => import('@/pages/dashboard')),
    title: '仪表盘',
  },
  {
    path: '/login',
    DefaultLayout,
    LazyComponent: React.lazy(() => import('@/pages/login')),
    title: '登陆',
  },
  {
    path: '/403',
    DefaultLayout: BasicLayout,
    LazyComponent: React.lazy(() => import('@/pages/403')),
    title: '无权限',
  },
  {
    path: '',
    DefaultLayout: BasicLayout,
    LazyComponent: React.lazy(() => import('@/pages/404')),
    title: '无页面',
  },
];

export const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Redirect
          exact
          from="/"
          to={window.envConfig.defaultRedirectUrl}
        />
        {renderRoute(routesInfo)}
      </Switch>
    </HashRouter>
  );
};

import dayjs from 'dayjs';
import React from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { NoPage } from './compnents/noPage';
import { SYSTEM_CONFIG } from './utils';
function TestPage() {
  return (
    <div className={'flex flex-1 justify-center items-center text-32 font-500 text-error'}>
      {dayjs().format('YYYY-MM-DD HH:mm:ss')}
    </div>
  );
}

export type RouteItem = { children?: RouteItem[] } & RouteObject & RouterMeta;

export const menuRoutes: RouteItem[] = [
  {
    title: '首页',
    hideInMenu: true,
    path: 'home',
    Component: React.lazy(() => import('./pages/home')),
  },
  {
    title: '首页',
    path: 'home',
    children: [
      {
        title: 'aaa',
        path: 'aaa',
        Component: TestPage,
      },
      {
        title: 'bbb',
        path: 'bbb',
        Component: TestPage,
      },
    ],
  },
];

export const routes: RouteItem[] = [
  {
    title: '',
    path: '/',
    element: (
      <Navigate
        replace={true}
        to={SYSTEM_CONFIG.homePage}
      />
    ),
  },
  {
    title: '登录',
    path: `${SYSTEM_CONFIG.routerPrefix}login`,
    Component: React.lazy(() => import('./pages/login')),
  },
  {
    title: '',
    path: SYSTEM_CONFIG.routerPrefix,
    children: (function dfs(data: RouteItem[]): RouteItem[] {
      return data.filter((item) => ({
        ...item,
        children: dfs(item.children || []),
      }));
    })(menuRoutes),
  },
  {
    title: '',
    path: '*',
    Component: NoPage,
  },
];

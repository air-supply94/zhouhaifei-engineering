import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { DefaultLayout } from './compnents/defaultLayout';
import { NoPage } from './compnents/noPage';

export type MenuDataItem = {
  title?: string;
  children?: MenuDataItem[];
} & RouteObject;

export const routes: MenuDataItem[] = [
  {
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        path: '/',
        element: (
          <Navigate
            replace={true}
            to="/dashboard"
          />
        ),
      },
      {
        title: '仪表盘',
        path: 'dashboard',
        Component: React.lazy(() => import('./pages/dashboard')),
      },
    ],
  },
  {
    path: '*',
    Component: NoPage,
  },
];

export function RenderRoutes() {
  return useRoutes(routes);
}

import { BasicLayout, DefaultLayout } from '@/compnents/layouts';
import { RouteLazyLoad } from '@/compnents/routeLazyLoad';
import _ from 'lodash';
import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { Route } from 'react-router-dom';

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
];

export interface RouteAssembleConfig {
  path: string;
  LazyComponent: React.ReactNode;
  DefaultLayout: React.ReactNode;
  title?: string;
}

export function RouteAssemble(config): React.ReactNode {
  return (
    <Route
      key={config.path}
      path={config.path}
      exact
      sensitive
      render={(routeInfo: RouteChildrenProps) => (
        <config.DefaultLayout {...routeInfo}>
          <RouteLazyLoad {...config} {...routeInfo}/>
        </config.DefaultLayout>
      )}
    />
  );
}

export function renderRoute(): React.ReactNode {
  return _.flattenDeep(routesInfo)
    .map((item) => RouteAssemble(item));
}

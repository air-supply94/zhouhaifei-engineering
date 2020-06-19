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

export const RouteAssemble = (props) => (
  <Route
    key={props.path}
    path={props.path}
    exact
    sensitive
    render={(routeInfo: RouteChildrenProps) => (
      <props.DefaultLayout {...routeInfo}>
        <RouteLazyLoad {...props} {...routeInfo}/>
      </props.DefaultLayout>
    )}
  />
);

export function renderRoute() {
  return _.flattenDeep(routesInfo)
    .map((item) => RouteAssemble(item));
}

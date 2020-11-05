import { RouteLazyLoad } from '@/compnents/routeLazyLoad';
import _ from 'lodash';
import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { Route } from 'react-router-dom';

export interface RouteAssembleConfig {
  path: string;
  LazyComponent: React.ReactType;
  DefaultLayout: React.ReactType;
  title?: string;
}

export function RouteAssemble(config: RouteAssembleConfig): React.ReactNode {
  return (
    <Route
      exact
      key={config.path}
      path={config.path}
      render={(routeInfo: RouteChildrenProps) => (
        <config.DefaultLayout {...routeInfo}>
          <RouteLazyLoad
            {...config}
            {...routeInfo}
          />
        </config.DefaultLayout>
      )}
      sensitive
    />
  );
}

export function renderRoute(routesInfo: RouteAssembleConfig[]): React.ReactNode {
  return _.flattenDeep(routesInfo)
    .map((item) => RouteAssemble(item));
}

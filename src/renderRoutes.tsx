import { Spin } from 'antd';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const WrapperRoute: React.FC<any> = ({ path, isLeaf, exact, strict, render, location, sensitive, ...rest }) => (
  <Route
    exact={exact}
    location={location}
    path={path}
    render={(props) => (isLeaf ? (
      <React.Suspense fallback={<Spin size="large"/>}>
        {render({
          ...props,
          ...rest,
        })}
      </React.Suspense>
    )
      : render({
        ...props,
        ...rest,
      })
    )}
    sensitive={sensitive}
    strict={strict}
  />
);

export function renderRoutes(routes: any[], extraProps = {}, switchProps = {}) {
  return Array.isArray(routes) && routes.length ? (
    <Switch {...switchProps}>
      {routes.map((route, index) => {
        if (route.from && route.to) {
          return (
            <Redirect
              exact={route.exact}
              from={route.from}
              key={route.key || index}
              strict={route.strict}
              to={route.to}
            />
          );
        } else {
          return (
            <WrapperRoute
              exact={route.exact}
              isLeaf={!(Array.isArray(route.children) && route.children.length)}
              key={route.key || index}
              path={route.path}
              render={(props) => {
                const childRoutes = renderRoutes(route.children, extraProps, { location: props.location });
                if (route.component) {
                  const { component: Component } = route;
                  return (
                    <Component
                      key={route.path}
                      {...props}
                      {...extraProps}
                      route={route}
                    >
                      {childRoutes}
                    </Component>
                  );
                }
                return childRoutes;
              }}
              sensitive={route.sensitive}
              strict={route.strict}
            />
          );
        }
      })}
    </Switch>
  ) : null;
}

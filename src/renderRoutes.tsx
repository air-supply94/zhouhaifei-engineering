import { MenuDataItem } from '@ant-design/pro-layout';
import React from 'react';
import { Redirect, HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

const DefaultWrapper: React.FC<any> = function(props) {
  return props.children;
};

const WrapperRoute: React.FC<any> = ({ path, Wrapper, route, exact, strict, render, location, sensitive, loading, ...rest }) => (
  <Route
    exact={exact}
    location={location}
    path={path}
    render={(props) => {
      const NewWrapper = Wrapper ? Wrapper : DefaultWrapper;
      return (
        <NewWrapper route={route}>
          <React.Suspense fallback={loading}>
            {render({
              route,
              ...props,
              ...rest,
            })}
          </React.Suspense>
        </NewWrapper>
      );
    }}
    sensitive={sensitive}
    strict={strict}
  />
);

function renderRoutes(routes: MenuDataItem[], extraProps = {}, switchProps = {}, loading) {
  if (Array.isArray(routes) && routes.length) {
    return (
      <Switch {...switchProps}>
        {routes.map((route, index) => {
          if (route.redirect) {
            return (
              <Redirect
                exact={route.exact}
                from={route.path}
                key={route.key || index}
                strict={route.strict}
                to={route.redirect}
              />
            );
          } else {
            return (
              <WrapperRoute
                Wrapper={route.Wrapper}
                exact={route.exact}
                key={route.key || index}
                loading={loading}
                path={route.path}
                render={(props) => {
                  const childRoutes = renderRoutes(route.routes, extraProps, { location: props.location }, loading);
                  if (route.component) {
                    const { component: Component } = route;
                    return (
                      <Component
                        {...props}
                        {...extraProps}
                      >
                        {childRoutes}
                      </Component>
                    );
                  } else {
                    return childRoutes;
                  }
                }}
                route={route}
                sensitive={route.sensitive}
                strict={route.strict}
              />
            );
          }
        })}
      </Switch>
    );
  } else {
    return null;
  }
}

interface RoutesProps {
  routes: MenuDataItem[];
  hash?: boolean;
  basename?: string;
  extraProps?: any;
  switchProps?: any;
  loading?: React.ReactNode;
}

export const Routes: React.FC<RoutesProps> = ({ routes, hash, basename, extraProps, switchProps, loading }) => {
  const Router: React.ReactType = hash ? HashRouter : BrowserRouter;
  return (
    <Router basename={basename}>
      {renderRoutes(routes, extraProps, switchProps, loading)}
    </Router>
  );
};

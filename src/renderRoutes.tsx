import { MenuDataItem } from '@ant-design/pro-layout';
import { Spin } from 'antd';
import React from 'react';
import { Redirect, HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

// @ts-ignore
const DefaultWrapper: React.FC = function(props) {
  return props.children;
};

const WrapperRoute: React.FC<any> = ({ path, Wrapper, route, exact, strict, render, location, sensitive, ...rest }) => (
  <Route
    exact={exact}
    location={location}
    path={path}
    render={(props) => {
      const NewWrapper = Wrapper ? Wrapper : DefaultWrapper;
      return (
        <NewWrapper route={route}>
          <React.Suspense fallback={<Spin size="large"/>}>
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

function renderRoutes(routes: MenuDataItem[], extraProps = {}, switchProps = {}) {
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
                path={route.path}
                render={(props) => {
                  const childRoutes = renderRoutes(route.routes, extraProps, { location: props.location });
                  if (route.component) {
                    const { component: Component } = route;
                    return (
                      <Component
                        {...props}
                        {...extraProps}
                        route={route}
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
}

export const Routes: React.FC<RoutesProps> = ({ routes, hash, basename, extraProps, switchProps }) => {
  const Router: React.ReactType = hash ? HashRouter : BrowserRouter;
  return (
    <Router
      basename={basename}
      history={history}
    >
      {renderRoutes(routes, extraProps, switchProps)}
    </Router>
  );
};

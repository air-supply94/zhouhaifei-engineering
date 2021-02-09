import { History } from 'history';
import React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';

export interface MenuDataItem {
  component?: React.ComponentType;
  wrapper?: React.ComponentType;
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
  redirect?: string;
  children?: MenuDataItem[];
  icon?: React.ReactNode;
  name?: string;
  path?: string;
  key?: string;
}

const DefaultWrapper: React.FC<any> = function(props) {
  return props.children;
};

const WrapperRoute: React.FC<any> = ({
  path,
  wrapper,
  route,
  exact,
  strict,
  render,
  location,
  sensitive,
  loading,
  ...rest
}) => (
  <Route
    exact={exact}
    location={location}
    path={path}
    render={(props) => {
      const NewWrapper = wrapper ? wrapper : DefaultWrapper;
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
                exact={route.exact}
                key={route.key || index}
                loading={loading}
                path={route.path}
                render={(props) => {
                  const childRoutes = renderRoutes(route.children, extraProps, { location: props.location }, loading);
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
                wrapper={route.wrapper}
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
  history: History;
  routes: MenuDataItem[];
  extraProps?: any;
  switchProps?: any;
  loading?: React.ReactNode;
}

export const RenderRoutes: React.FC<RoutesProps> = ({
  routes,
  history,
  extraProps,
  switchProps,
  loading,
}) => {
  return (
    <Router history={history}>
      {renderRoutes(routes, extraProps, switchProps, loading)}
    </Router>
  );
};

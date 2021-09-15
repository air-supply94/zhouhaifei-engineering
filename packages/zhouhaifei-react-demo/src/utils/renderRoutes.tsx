import type { History } from 'history';
import React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import type { RouteComponentProps } from 'react-router-dom';

export class MenuDataItem {
  public key?: string;

  public wrapper?: React.ReactNode;

  // 重定向
  public redirect?: string;

  // react-router的exact
  public exact?: boolean;

  // react-router的sensitive
  public sensitive?: boolean;

  // react-router的strict
  public strict?: boolean;

  // 标题
  public name?: string;

  // 路径
  public path?: string;

  // 子路由-支持n级
  public children?: MenuDataItem[];

  // 子组件-支持n级
  public component?: React.ReactType;

  public hideChildrenInMenu?: boolean;

  public hideInMenu?: boolean;

  public icon?: string;

  public locale?: string;
}

const DefaultWrapper: React.FC<{ route: MenuDataItem; }> = function({
  route,
  children,
}) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
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
}) => {
  return (
    <Route
      exact={exact}
      location={location}
      path={path}
      render={(props: RouteComponentProps<any>) => {
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
};

function renderRoutes(routes: MenuDataItem[], extraProps = {}, switchProps = {}, loading?: React.ReactNode) {
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
                name={route.name}
                path={route.path}
                render={(props: RouteComponentProps<any> & MenuDataItem) => {
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

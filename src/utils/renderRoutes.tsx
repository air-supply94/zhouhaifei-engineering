import { History } from 'history';
import React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';

export interface MenuDataItem {

  // react-router的exact
  exact?: boolean;

  // react-router的sensitive
  sensitive?: boolean;

  // react-router的strict
  strict?: boolean;

  // 标题
  title?: string;

  // 路径
  path?: string;

  // 子路由-支持n级
  children?: MenuDataItem[];

  // 子组件-支持n级
  component?: React.ReactType;

  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  [key: string]: any;
}

const DefaultWrapper: React.FC<{ route: MenuDataItem; }> = function({
  route,
  children,
}) {
  React.useEffect(() => {
    if (route.title && !(Array.isArray(route.children) && route.children.length)) {
      console.log(route);
      document.title = route.title;
    }
  }, []);

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
};

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
                title={route.title}
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

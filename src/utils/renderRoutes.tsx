import { History } from 'history';
import React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';

export interface MenuDataItem {

  /**
   * @name 子菜单
   */
  children?: MenuDataItem[];

  /**
   * @name 在菜单中隐藏子节点
   */
  hideChildrenInMenu?: boolean;

  /**
   * @name 在菜单中隐藏自己和子节点
   */
  hideInMenu?: boolean;

  /**
   * @name 菜单的icon
   */
  icon?: React.ReactNode;

  /**
   * @name 自定义菜单的国际化 key
   */
  locale?: string | false;

  /**
   * @name 菜单的名字
   */
  name?: string;

  /**
   * @name 用于标定选中的值，默认是 path
   */
  key?: string;

  /**
   * @name disable 菜单选项
   */
  disabled?: boolean;

  /**
   * @name 路径
   */
  path?: string;

  /**
   * @name 自定义父节点
   * @description 当此节点被选中的时候也会选中 parentKeys 的节点
   */
  parentKeys?: string[];

  /**
   * @name 隐藏自己，并且将子节点提升到与自己平级
   */
  flatMenu?: boolean;
  [key: string]: any;
}

const DefaultWrapper: React.FC<any> = function(props) {
  return props.children;
};

const WrapperRoute: React.FC<any> = ({
  path,
  Wrapper,
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

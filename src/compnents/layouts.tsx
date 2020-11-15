import { Global } from '@/models/global';
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { observer, inject } from 'mobx-react';
import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { NavLink } from 'react-router-dom';

function menuDataRender(menuList: MenuDataItem[] = []): MenuDataItem[] {
  return menuList.filter((item) => item.path)
    .filter((item) => ![
      '/',
      '/403',
      '/403/',
    ].includes(item.path))
    .map((item) => ({
      ...item,
      children: Array.isArray(item.routes) && item.routes.length ? menuDataRender(item.routes) : [],
    }));
}

export interface BasicLayoutInterface extends RouteChildrenProps {
  global: Global;
  route: MenuDataItem;
}

@inject('global')
@observer
export class BasicLayout extends React.Component<BasicLayoutInterface> {
  render() {
    const { location, global, children, route = { routes: []}} = this.props;
    return (
      <ProLayout
        children={children}
        collapsed={global.collapsed}
        fixSiderbar
        fixedHeader
        location={{ pathname: location.pathname }}
        logo={null}
        menuDataRender={() => menuDataRender(route.routes)}
        menuHeaderRender={(logo, title) => null}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
            return defaultDom;
          }

          return (
            <NavLink to={menuItemProps.path}>
              {defaultDom}
            </NavLink>
          );
        }}
        onCollapse={global.toggleCollapsed}
        title={window.envConfig.title}
      />
    );
  }
}

export const DefaultLayout: React.FC<any> = function(props) {
  return props.children;
};

import ProLayout from '@ant-design/pro-layout';
import React from 'react';
import type { RouteChildrenProps } from 'react-router';
import { Link } from 'react-router-dom';
import type { MenuDataItem } from 'zhouhaifei-common';

function menuDataRender(menuList: MenuDataItem[] = []): MenuDataItem[] {
  return menuList.filter((item) => !Object.prototype.hasOwnProperty.call(item, 'redirect'))
    .filter((item) => item.name)
    .map((item) => ({
      ...item,
      children: Array.isArray(item.children) && item.children.length ? menuDataRender(item.children) : [],
    }));
}

export interface BasicLayoutInterface extends RouteChildrenProps {
  route: MenuDataItem;
}

export class BasicLayout extends React.Component<BasicLayoutInterface> {
  render() {
    const {
      location,
      children,
      route = { children: []},
    } = this.props;
    return (
      <ProLayout
        breakpoint={false}
        children={children}
        contentStyle={{ margin: 8 }}
        fixSiderbar
        fixedHeader
        location={{ pathname: location.pathname }}
        logo={null}
        menuDataRender={() => menuDataRender(route.children)}
        menuHeaderRender={(logo, title) => null}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
            return defaultDom;
          } else {
            return (
              <Link to={menuItemProps.path}>
                {defaultDom}
              </Link>
            );
          }
        }}
        navTheme="light"
        title={route.name}
      />
    );
  }
}

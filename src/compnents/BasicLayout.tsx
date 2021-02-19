import ProLayout from '@ant-design/pro-layout';
import { observer, inject } from 'mobx-react';
import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { MenuDataItem } from 'src/utils';
import { GlobalModel } from '../models/globalModel';

function menuDataRender(menuList: MenuDataItem[] = []): MenuDataItem[] {
  return menuList.filter((item) => !Object.prototype.hasOwnProperty.call(item, 'redirect'))
    .filter((item) => item.name)
    .map((item) => ({
      ...item,
      children: Array.isArray(item.children) && item.children.length ? menuDataRender(item.children) : [],
    }));
}

export interface BasicLayoutInterface extends RouteChildrenProps {
  globalModel: GlobalModel;
  route: MenuDataItem;
}

@inject('globalModel')
@observer
export class BasicLayout extends React.Component<BasicLayoutInterface> {
  render() {
    const {
      location,
      globalModel: {
        collapsed,
        handleCollapsed,
      },
      children,
      route = { children: []},
    } = this.props;
    return (
      <ProLayout
        breakpoint={false}
        children={children}
        collapsed={collapsed}
        fixSiderbar
        fixedHeader
        location={{ pathname: location.pathname }}
        logo={null}
        menuDataRender={() => menuDataRender(route.children)}
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
        navTheme="dark"
        onCollapse={handleCollapsed}
      />
    );
  }
}

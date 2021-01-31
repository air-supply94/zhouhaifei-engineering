import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { observer, inject } from 'mobx-react';
import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { GlobalInterface } from '../models/global';

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
  globalStore: GlobalInterface;
  route: MenuDataItem;
}

@inject('globalStore')
@observer
export class BasicLayout extends React.Component<BasicLayoutInterface> {
  state = { isMounted: false };

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const {
      location,
      globalStore: {
        collapsed,
        toggleCollapsed,
      },
      children,
      route = { routes: []},
    } = this.props;
    return (
      <ProLayout
        children={children}
        collapsed={collapsed}
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
        onCollapse={this.state.isMounted ? toggleCollapsed : undefined}
      />
    );
  }
}

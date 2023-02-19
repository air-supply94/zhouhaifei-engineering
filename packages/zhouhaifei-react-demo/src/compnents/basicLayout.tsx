import ProLayout from '@ant-design/pro-layout';
import { Spin } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { routes } from '../routes';
import type { MenuDataItem } from '../routes';

function menuDataRender(menuList: MenuDataItem[] = []): MenuDataItem[] {
  return menuList.filter((item) => !Object.prototype.hasOwnProperty.call(item, 'redirect'))
    .filter((item) => item.name && item.path !== '*')
    .map((item) => ({
      ...item,
      children: Array.isArray(item.children) && item.children.length ? menuDataRender(item.children) : [],
    }));
}

export class BasicLayout extends React.Component {
  render() {
    return (
      <ProLayout
        breakpoint={false}
        contentStyle={{ margin: 8 }}
        fixSiderbar
        fixedHeader
        location={{ pathname: location.pathname }}
        logo={null}
        menuDataRender={() => menuDataRender(routes[0].children)}
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
        navTheme="realDark"
        title={routes[0].name}
      >
        <React.Suspense fallback={<Spin/>}>
          <Outlet/>
        </React.Suspense>
      </ProLayout>
    );
  }
}

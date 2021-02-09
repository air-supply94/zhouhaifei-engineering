import { Layout, Menu } from 'antd';
import { observer, inject } from 'mobx-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalModel } from '../models/globalModel';
import { MenuDataItem } from '../utils';
import styles from './basicLayout.module.less';

function menuDataRender(menuList: MenuDataItem[] = []): MenuDataItem[] {
  return menuList.filter((item) => item.path)
    .filter((item) => ![
      '/',
      '/403',
      '/403/',
    ].includes(item.path))
    .map((item) => ({
      ...item,
      children: Array.isArray(item.children) && item.children.length ? menuDataRender(item.children) : [],
    }));
}

export class BasicLayout extends React.Component<{ route: MenuDataItem; }> {
  render() {
    const {
      children,
      route,
    } = this.props;
    return (
      <Layout
        className={styles.container}
        hasSider
      >
        <LayoutSider route={route}/>
        <Layout hasSider={false}>
          <LayoutHeader/>
          <Layout.Content children={children}/>
        </Layout>
      </Layout>
    );
  }
}

@inject('globalModel')
@observer
class LayoutSider extends React.Component<{ globalModel?: GlobalModel; route: MenuDataItem; }> {
  render() {
    const {
      globalModel: {
        collapsed,
        handleCollapsed,
      },
      route,
    } = this.props;
    const routes = menuDataRender(route?.children || []);
    return (
      <Layout.Sider
        collapsed={collapsed}
        collapsible
        onCollapse={handleCollapsed}
        theme="light"
      >
        <Menu
          mode="inline"
          theme="light"
        >
          {
            (function fn(routes) {
              return routes.map((item) => {
                if (Array.isArray(item.children) && item.children.length) {
                  return (
                    <Menu.SubMenu
                      key={item.path}
                      title={item.name}
                    >
                      {fn(item.children)}
                    </Menu.SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item key={item.path}>
                      <NavLink to={item.path}>
                        {item.name}
                      </NavLink>
                    </Menu.Item>
                  );
                }
              });
            })(routes)
          }
        </Menu>
      </Layout.Sider>
    );
  }
}

@inject('globalModel')
@observer
class LayoutHeader extends React.Component<{ globalModel?: GlobalModel; }> {
  render() {
    return (
      <Layout.Header/>
    );
  }
}

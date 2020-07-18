import { menuData } from '@/compnents/menuData';
import { Global } from '@/models/global';
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { observer, inject } from 'mobx-react';
import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { NavLink } from 'react-router-dom';

function menuDataRender(menuList: MenuDataItem[] = menuData): MenuDataItem[] {
  return menuList.map((item) => ({
    ...item,
    children: Array.isArray(item.children) && item.children.length ? menuDataRender(item.children) : [],
  }));
}

export interface BasicLayoutInterface extends RouteChildrenProps {
  global: Global;
}

@inject('global')
@observer
export class BasicLayout extends React.Component<BasicLayoutInterface> {
  state = { didMount: false };

  componentDidMount() {
    /* 解决先把collapsed设置为true，再用url跳转到其他页面时。
       onCollapse被调用问题，不知道原因 */
    this.setState({ didMount: true });
  }

  render() {
    const { history, location, match, global, ...rest } = this.props;

    return (
      <ProLayout
        collapsed={this.props.global.collapsed}
        location={{ pathname: location.pathname }}
        title={window.envConfig.title}
        logo={null}
        menuHeaderRender={() => null}
        fixedHeader
        fixSiderbar
        onCollapse={this.state.didMount && this.props.global.toggleCollapsed}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
            return defaultDom;
          }

          return <NavLink to={menuItemProps.path}>{defaultDom}</NavLink>;
        }}
        menuDataRender={() => menuDataRender()}
        {...rest}
      />
    );
  }
}

export const DefaultLayout: React.FC = function(props) {
  return <>{props.children}</>;
};

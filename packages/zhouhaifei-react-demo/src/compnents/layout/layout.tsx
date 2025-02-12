import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Menu, type MenuProps, Tabs, type TabsProps } from 'antd';
import { observer } from 'mobx-react';
import type React from 'react';
import styles from './layout.less';
import type { LayoutStore } from './layoutStore';
import type { MenuItem } from './types';
const HeaderTabBar = observer(
  ({
    layoutStore: { tabList, removeTab, activeTabId, setActiveTabId, defaultTab },
  }: Pick<LayoutProps, 'layoutStore'>) => {
    const items: TabsProps['items'] = [
      {
        key: defaultTab.id,
        label: defaultTab.title,
        closable: false,
      },
    ].concat(
      tabList.map((item) => ({
        key: item.id,
        label: item.title,
        closable: true,
      })),
    );

    return (
      <Tabs
        hideAdd={true}
        type={'editable-card'}
        size={'small'}
        className={'min-w-0 flex-1'}
        items={items}
        onEdit={(targetKey, action) => {
          if (action === 'remove') {
            removeTab(targetKey as string);
          }
        }}
        onChange={setActiveTabId}
        activeKey={activeTabId}
      />
    );
  },
);

const Sider = observer(
  ({
    logo,
    layoutStore: { collapsed, menuData, toggleCollapsed, addTab, selectedKeys, setSelectedKeys, openKeys, setOpenKeys },
  }: Pick<LayoutProps, 'logo' | 'layoutStore'>) => {
    return (
      <>
        {logo}
        <Menu
          openKeys={openKeys}
          onOpenChange={setOpenKeys}
          selectedKeys={selectedKeys}
          onSelect={(event) => setSelectedKeys(event.selectedKeys || [])}
          className={'flex-1 overflow-y-auto'}
          inlineCollapsed={collapsed}
          mode="inline"
          theme="light"
          items={(function dfs(data: MenuItem[]): MenuProps['items'] {
            return data.map((item) => {
              if (Array.isArray(item.children) && item.children.length) {
                return {
                  key: item.id,
                  label: item.title,
                  children: dfs(item.children),
                };
              } else {
                return {
                  key: item.id,
                  label: <div onClick={() => addTab(item)}>{item.title}</div>,
                  title: item.title,
                };
              }
            });
          })(menuData)}
        />
        <div className={'flex justify-center'}>
          <Button
            size={'small'}
            type="primary"
            onClick={toggleCollapsed}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
      </>
    );
  },
);

const Content = observer(
  ({
    defaultDashboard,
    layoutStore: { activeTabId, defaultTab, renderIframeTabList },
  }: Pick<LayoutProps, 'defaultDashboard' | 'layoutStore'>) => {
    return (
      <>
        <div
          style={{ display: activeTabId == defaultTab.id ? 'flex' : 'none' }}
          className={'flex flex-1 transition-all'}
        >
          {defaultDashboard}
        </div>

        {renderIframeTabList.map((item) => (
          <iframe
            key={item.id}
            style={{ display: item.id == activeTabId ? 'block' : 'none' }}
            dataset-id={`${item.id}`}
            className={'flex-1 min-w-[1200px]'}
            src={item.path}
            title={item.title}
          />
        ))}
      </>
    );
  },
);

export interface LayoutProps {
  footer?: React.ReactNode;
  headerRight?: React.ReactNode;
  defaultDashboard?: React.ReactNode;
  logo?: React.ReactNode;
  layoutStore: LayoutStore;
}

export const Layout = observer(({ footer, headerRight, logo, defaultDashboard, layoutStore }: LayoutProps) => {
  const { navbarHeight, siderWidth } = layoutStore;
  return (
    <div className={'flex flex-col flex-1'}>
      <div
        style={{ height: navbarHeight, zIndex: 99, paddingLeft: siderWidth }}
        className="bg-white fixed top-0 right-0 left-0 transition-all"
      >
        <div
          style={{ height: navbarHeight }}
          className={`flex w-full justify-between items-center px-2 ${styles.tabContainer}`}
        >
          <HeaderTabBar layoutStore={layoutStore} />
          {headerRight}
        </div>
      </div>
      <div
        style={{ width: siderWidth, zIndex: 99 }}
        className={'fixed left-0 top-0 bottom-0 flex flex-col gap-1 bg-white transition-all'}
      >
        <Sider
          logo={logo}
          layoutStore={layoutStore}
        />
      </div>
      <div
        style={{ paddingLeft: siderWidth, paddingTop: navbarHeight }}
        className="flex flex-col flex-1 transition-all"
      >
        <div className="flex flex-col flex-1 bg-bg p-2 gap-2">
          <div className="flex flex-col flex-1">
            <Content
              layoutStore={layoutStore}
              defaultDashboard={defaultDashboard}
            />
          </div>
          {footer}
        </div>
      </div>
    </div>
  );
});

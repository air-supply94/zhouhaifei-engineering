import type React from 'react';

type _MenuAndTabItem = {
  id: string;
  path?: string;
  title?: string;
  icon?: React.ReactNode;
};

export interface MenuItem extends _MenuAndTabItem {
  children?: MenuItem[];
}

export interface TabItem extends _MenuAndTabItem {
  opened?: boolean;
}

export interface CacheData {
  selectedKeys: string[];
  openKeys: string[];
  collapsed: boolean;
  tabList: TabItem[];
  activeTabId: string;
}

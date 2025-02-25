import { action, computed, observable } from 'mobx';
import styles from 'src/compnents/layout/layout.css';
import type { CacheData, MenuItem, TabItem } from './types';

function findMenuPath(data: MenuItem[], itemId: string, path: MenuItem[] = []): MenuItem[] {
  for (let i = 0; i < data.length; i++) {
    const dataItem = data[i];
    if (dataItem.id == itemId) {
      return path.concat(dataItem);
    }

    if (dataItem.children?.length) {
      path.push(dataItem);
      const result = findMenuPath(dataItem.children, itemId, path);
      path.pop();
      if (result.length) {
        return result;
      }
    }
  }

  return [];
}

export class LayoutStore {
  constructor(
    public defaultTab: TabItem,
    private cacheable = true,
  ) {
    this.activeTabId = defaultTab.id;
    if (cacheable) {
      const cacheData = localStorage.getItem(LayoutStore.CACHE_KEY);
      if (cacheData) {
        const cacheDataObj: CacheData = JSON.parse(cacheData);
        const activeTabId = cacheDataObj.activeTabId || defaultTab.id;
        this.selectedKeys = cacheDataObj.selectedKeys || [];
        this.openKeys = cacheDataObj.openKeys || [];
        this.collapsed = Boolean(cacheDataObj.collapsed);
        this.tabList = (cacheDataObj.tabList || []).map((item) => ({
          ...item,
          opened: item.id == activeTabId,
        }));
        this.activeTabId = activeTabId;
      }
    }
  }
  private syncCacheData = () => {
    if (this.cacheable) {
      const cacheData = {
        selectedKeys: this.selectedKeys,
        openKeys: this.openKeys,
        collapsed: this.collapsed,
        tabList: this.tabList.map((item) => ({
          ...item,
          opened: false,
        })),
        activeTabId: this.activeTabId,
      };
      localStorage.setItem(LayoutStore.CACHE_KEY, JSON.stringify(cacheData));
    }
  };

  public static CACHE_KEY = '__layout_store_cache__';

  @observable.ref public accessor selectedKeys: string[] = [];
  @observable.ref public accessor openKeys: string[] = [];
  @action public setSelectedKeys = (selectedKeys: string[]) => {
    this.selectedKeys = selectedKeys || [];
    this.syncCacheData();
  };
  @action public setOpenKeys = (openKeys: string[]) => {
    this.openKeys = openKeys || [];
    this.syncCacheData();
  };

  @observable public accessor collapsed = false;

  @action public toggleCollapsed = () => {
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      this.setOpenKeys([]);
    } else {
      this.setActiveTabId(this.activeTabId);
    }
  };

  @observable.ref public accessor menuData: MenuItem[] = [];
  @action public setMenuData = (menuData: MenuItem[]) => {
    this.menuData = menuData || [];
  };

  @observable public accessor navbarHeight = 48;
  @computed public get siderWidth() {
    return this.collapsed ? 80 : 160;
  }

  @observable public accessor tabList: TabItem[] = [];
  @computed public get renderIframeTabList(): TabItem[] {
    return this.tabList.filter((item) => item.opened);
  }
  @observable public accessor activeTabId: string;
  @action public setActiveTabId = (tabId: string) => {
    this.activeTabId = tabId;
    const oldTab = this.tabList.find((item) => item.id == tabId);
    if (oldTab) {
      oldTab.opened = true;
    }
    const menuItem = findMenuPath(this.menuData, tabId);
    this.selectedKeys = menuItem.length ? [menuItem[menuItem.length - 1].id] : [];
    if (this.collapsed) {
      this.openKeys = [];
    } else {
      this.openKeys = menuItem.length ? menuItem.map((item) => item.id) : [];
    }
    this.syncCacheData();
  };
  @action public addTab = (tabItem: TabItem) => {
    const tabId = tabItem.id;
    const menuItem = findMenuPath(this.menuData, tabId);
    const oldTab = this.tabList.find((item) => item.id == tabId);
    const newTabItem = {
      ...(menuItem.length ? menuItem[menuItem.length - 1] : {}),
      ...tabItem,
      id: tabId,
      opened: true,
    };
    if (oldTab) {
      oldTab.path = newTabItem.path;
      oldTab.title = newTabItem.title;
      oldTab.icon = newTabItem.icon;
      const iframeList = document.querySelectorAll<HTMLIFrameElement>(`.${styles.tabContainer} iframe`);
      [].slice.call(iframeList || []).forEach((item: HTMLIFrameElement) => {
        if (item.dataset.id == tabId) {
          item.contentWindow.location.href = newTabItem.path;
        }
      });
    } else {
      this.tabList.push(newTabItem);
    }

    this.setActiveTabId(tabId);
  };

  @action public removeTab = (tabId: string) => {
    this.tabList = this.tabList.filter((item) => item.id != tabId);
    if (tabId == this.activeTabId) {
      this.activeTabId = this.defaultTab.id;
      this.selectedKeys = [];
      this.openKeys = [];
    }
    this.syncCacheData();
  };
}

import { action, observable } from 'mobx';
import type { MenuItem } from '../compnents/layout';
import { type RouteItem, menuRoutes } from '../routes';
import { SYSTEM_CONFIG } from './constants';
import { hasPermission } from './permission';
import { request } from './request';

export interface UserInfo {
  avatar?: string;
  username?: string;
  nickname?: string;
  permissions?: string[];
  accessToken?: string;
}

export class UserStore {
  @observable public accessor userInfo: UserInfo = {};
  @action public setUserInfo = (userInfo: UserInfo) => {
    this.userInfo = userInfo;
  };
  public getUserInfo = async () => {
    const info = await request<BaseData<UserInfo>>({ url: '/api/userInfo' });
    this.userInfo = info.data || {};
  };

  @action public handleLogoff = async (): Promise<void> => {
    await request({
      url: '/api/logoff',
      method: 'post',
    });
    localStorage.removeItem(SYSTEM_CONFIG.storageTokenKey);
    window.location.href = SYSTEM_CONFIG.loginPage;
  };

  public getMenuData = () => {
    function dfs(data: RouteItem[], currentPath: string = SYSTEM_CONFIG.routerPrefix): MenuItem[] {
      return data
        .filter((item) => !item.hideInMenu)
        .filter((item) => item.permissionId == null || hasPermission(item.permissionId))
        .sort((a, b) => (a.order || 1) - (b.order || 1))
        .map((item) => {
          const resultPath = item.redirect
            ? item.path
            : `${currentPath.replace(/\/+$/, '')}/${(item.path || '').replace(/^\/+/, '')}`;
          return {
            id: item.id || resultPath,
            path: resultPath,
            title: item.title,
            icon: item.icon,
            children: dfs(item.children || [], resultPath),
          };
        });
    }

    return dfs(menuRoutes);
  };
}

export const userStore = new UserStore();

import { action, observable } from 'mobx';

const collapsedKey = '@@globalCollapsedKey';

export interface GlobalInterface {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

class Global implements GlobalInterface {
  @observable public collapsed = window.localStorage.getItem(collapsedKey) === 'true';

  @action public toggleCollapsed = () => {
    this.collapsed = !this.collapsed;
    window.localStorage.setItem(collapsedKey, String(this.collapsed));
  };
}

export const globalStore = new Global();

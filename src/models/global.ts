import { action, observable } from 'mobx';

const collapsedKey = '@@globalCollapsedKey';

export interface GlobalInterface {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

export class Global implements GlobalInterface {
  @observable public collapsed = window.localStorage.getItem(collapsedKey) === 'true';

  @action.bound
  public toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    window.localStorage.setItem(collapsedKey, String(this.collapsed));
  }
}

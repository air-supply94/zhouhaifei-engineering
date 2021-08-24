import { action, observable } from 'mobx';

const collapsedKey = '@@globalCollapsedKey';

export class GlobalModel {
  @observable public collapsed = window.localStorage.getItem(collapsedKey) === 'true';

  @action public handleCollapsed = () => {
    this.collapsed = !this.collapsed;
    window.localStorage.setItem(collapsedKey, String(this.collapsed));
  };
}

export const globalModel = new GlobalModel();

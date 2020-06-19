import { observable, action } from 'mobx';

const collapsedKey = '@@globalCollapsedKey';

export class Global {
  @observable collapsed = window.localStorage.getItem(collapsedKey) === 'true';

  @action.bound public toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    window.localStorage.setItem(collapsedKey, String(this.collapsed));
  }
}

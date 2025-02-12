import { LayoutStore } from '../compnents/layout';

export const layoutStore = new LayoutStore({
  id: '-999',
  title: '首页',
  path: '',
  icon: '',
});
if ('__openTab' in window.top) {
  window.__openTab = window?.top?.__openTab;
} else {
  window.__openTab = layoutStore.addTab;
}

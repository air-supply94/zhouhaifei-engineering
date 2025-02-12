interface Window {
  __openTab: (tabItem: {
    id: string;
    path?: string;
    title?: string;
    icon?: string;
  }) => void;
}

declare interface BaseData<T = unknown> {
  code?: number;
  msg?: string;
  data: T;
}

declare interface PaginationData<T = unknown> {
  code?: number;
  msg?: string;
  data?: {
    currPage?: number;
    pageSize?: number;
    totalCount?: number;
    totalPage?: number;
    list: T[];
  };
}

declare interface RouterMeta {
  id?: string;
  path?: string;
  title: string;
  icon?: string;
  hideInMenu?: boolean;

  order?: number;
  permissionId?: string | string[];
  redirect?: boolean;
}

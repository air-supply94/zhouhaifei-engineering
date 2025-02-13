import { Empty } from 'antd';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import type React from 'react';

export interface PermissionProps {
  readonly permissionId: string | string[];
  readonly children?: React.ReactNode;

  /**
   * 没有权限时渲染的内容
   * 默认为null---什么都不渲染
   * default---提示暂无权限访问
   * string---自定义渲染的文字
   */
  readonly renderNoPermission?: null | 'default' | string;
}

export function hasPermission(permissionId: PermissionProps['permissionId']): boolean {
  if (typeof permissionId === 'string') {
    return permissionList.data.includes(permissionId);
  } else if (Array.isArray(permissionId)) {
    return Boolean(permissionId.some((item) => permissionList.data.includes(item)));
  } else {
    return true;
  }
}

const permissionList: { data: string[] } = observable({ data: [] });
export const setPermissionList = (data: string[]) => {
  permissionList.data = data;
};

export const Permission = observer(({ permissionId, children, renderNoPermission }: PermissionProps) => {
  if (hasPermission(permissionId)) {
    return children;
  }

  if (renderNoPermission == null) {
    return null;
  }

  return (
    <Empty
      description={renderNoPermission === 'default' ? '暂无权限访问' : renderNoPermission}
      style={{
        height: '100%',
        display: 'flex',
        lineHeight: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
});

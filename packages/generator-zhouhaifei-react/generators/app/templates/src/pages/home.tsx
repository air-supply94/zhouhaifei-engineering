import { Button, Popconfirm, Popover } from 'antd';
import { observer } from 'mobx-react';
import { ASSETS } from 'src/assets';
import { Layout } from 'src/compnents/layout';
import { layoutStore, setPermissionList, userStore } from 'src/utils';

userStore.getUserInfo().then(() => {
  setPermissionList(userStore.userInfo?.permissions || []);
  layoutStore.setMenuData(userStore.getMenuData());
});

export default observer(() => {
  return (
    <Layout
      layoutStore={layoutStore}
      logo={
        <div className={'flex justify-center'}>
          <img
            // className={'w-[32px] h-[32px] object-contain'}
            src={ASSETS.logo}
            alt=""
          />
        </div>
      }
      defaultDashboard={<div className={'flex flex-1 items-center justify-center text-32 font-500'}>管理系统</div>}
      headerRight={
        <Popover
          className={'cursor-pointer h-10 min-w-[100px] flex items-center justify-center'}
          trigger={'click'}
          placement={'bottom'}
          content={
            <div className={'flex flex-col gap-2'}>
              <Popconfirm
                trigger={'click'}
                title={'确定退出登录吗?'}
                onConfirm={userStore.handleLogoff}
              >
                <Button type={'primary'}>退出登录</Button>
              </Popconfirm>
            </div>
          }
        >
          <span className={'text-16 font-500 mr-1'}>{userStore.userInfo.nickname}</span>
          <img
            className={'size-8 rounded-8'}
            src={userStore.userInfo.avatar}
            alt=""
          />
        </Popover>
      }
    />
  );
});

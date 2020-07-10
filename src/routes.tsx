import { renderRoute } from '@/compnents';
import { Result, Button } from 'antd';
import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';

export function Routes(): React.ReactNode {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={window.envConfig.defaultRedirectUrl}/>}/>
        {renderRoute()}

        {/* 403--路由 */}
        <Route
          path="/403"
          component={() => <Result
            status="403"
            title="403"
            subTitle="对不起, 您没有访问该页面的权限"
            extra={<Button href="/" type="primary">回到首页</Button>}
          />}
        />

        {/* 404--路由 */}
        <Route
          component={() => <Result
            status="404"
            title="404"
            subTitle="对不起, 您访问的页面不存在"
            extra={<Button href="/" type="primary">回到首页</Button>}
          />}
        />
      </Switch>
    </HashRouter>
  );
}

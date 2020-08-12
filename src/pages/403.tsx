import { Result, Button } from 'antd';
import React from 'react';

export default function() {
  return <Result
    status="403"
    title="403"
    subTitle="对不起, 您没有访问该页面的权限"
    extra={<Button href="/" type="primary">回到首页</Button>}
  />;
}

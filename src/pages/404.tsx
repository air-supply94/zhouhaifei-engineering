import { Result, Button } from 'antd';
import React from 'react';

export default function() {
  return <Result
    status="404"
    title="404"
    subTitle="对不起, 您访问的页面不存在"
    extra={<Button href="/" type="primary">回到首页</Button>}
  />;
}

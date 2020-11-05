import { Result, Button } from 'antd';
import React from 'react';

export default function() {
  return (
    <Result
      extra={(
        <Button type="primary">
          回到首页
        </Button>
      )}
      status="403"
      subTitle="对不起, 您没有访问该页面的权限"
      title="403"
    />
  );
}

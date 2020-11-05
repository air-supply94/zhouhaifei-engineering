import { Result, Button } from 'antd';
import React from 'react';

export default function() {
  return (
    <Result
      extra={(
        <Button
          href="/"
          type="primary"
        >
          回到首页
        </Button>
      )}
      status="404"
      subTitle="对不起, 您访问的页面不存在"
      title="404"
    />
  );
}

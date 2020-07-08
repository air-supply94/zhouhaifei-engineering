import { request } from '@/utils';
import { Card } from 'antd';
import React from 'react';

export default function Entry() {
  React.useEffect(() => {
    request({ url: '/api/test' })
      .then((info) => {
        console.log(info);
      });
  }, []);

  return (
    <>
      <Card size="small">
        dashboard
      </Card>
    </>
  );
}

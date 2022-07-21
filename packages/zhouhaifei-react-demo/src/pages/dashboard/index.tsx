import { Card } from 'antd';
import React from 'react';
import { request } from 'zhouhaifei-common';
import styles from './index.less';

export default function() {
  React.useEffect(() => {
    request({ url: '/1api/test' })
      .then((info) => {
        console.log(info);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Card size="small">
        dashboard
      </Card>
    </div>
  );
}

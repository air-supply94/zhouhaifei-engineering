import { Card, Button } from 'antd';
import React from 'react';
import { request } from '../../utils';
import styles from './index.module.less';

export default function Entry() {
  React.useEffect(() => {
    request({ url: '/api/test' })
      .then((info) => {
        console.log(info);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Card size="small">
        <Button type="primary">
          111
        </Button>
      </Card>
    </div>
  );
}

import React from 'react';
import { Card } from 'antd';
import styles from './index.less';
import mock from 'mockjs';
import { request } from '../../utils';

mock.mock('/api/test', 'get', {
  'list|100': [
    {
      name: '@city',
      'value|1-100': 50,
      'type|0-2': 1,
    },
  ],
});

export default function() {
  React.useEffect(() => {
    request({ url: '/api/test' })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Card>
        hello
      </Card>
    </div>
  );
}

import React from 'react';
import { Card } from 'antd';
import styles from './index.less';
import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import mock from 'mockjs';

mock.mock('/api/test', 'get', {
  'list|100': [
    {
      name: '@city',
      'value|1-100': 50,
      'type|0-2': 1,
    },
  ],
});

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  private name = '';

  public age = 0;

  public setAge = () => {
    this.age++;
  };
}

const store = new Store();
export default observer(() => {
  React.useEffect(() => {
    axios.request({ url: '/api/test' })
      .then((data) => {
        console.log(data);
      });

    axios.request({ url: '/api/iac/role/user/perms' })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div
      className={styles.container}
      onClick={store.setAge}
    >
      <Card size="small">
        hello
        {store.age}
      </Card>
    </div>
  );
});

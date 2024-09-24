import { Card } from 'antd';
import axios from 'axios';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import mock from 'mockjs';
import React from 'react';
import styles from './index.less';

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
  @observable public accessor age = 0;

  @action public setAge = () => {
    this.age++;
  };
}

const store = new Store();
export default observer(() => {
  React.useEffect(() => {
    axios.request({ url: '/api/test' }).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className={styles.container} onClick={store.setAge}>
      <Card size="small">
        hello
        {store.age}
      </Card>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
});

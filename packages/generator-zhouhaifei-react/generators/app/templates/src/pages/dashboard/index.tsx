import { Card } from 'antd';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import styles from './index.less';

class Store {
  @observable public accessor age = 0;

  @action public setAge = () => {
    this.age++;
  };
}

export default observer(() => {
  const store = React.useMemo(() => new Store(), []);

  return (
    <div
      className={styles.container}
      onClick={store.setAge}
    >
      <Card size="small">
        hello
        {store.age}
      </Card>
      <h1 className="text-18 font-500 underline">Hello world!</h1>
    </div>
  );
});

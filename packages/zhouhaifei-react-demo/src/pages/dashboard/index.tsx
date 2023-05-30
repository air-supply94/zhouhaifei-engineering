import { Card } from 'antd';
import { Container } from 'inversify';
import React from 'react';
import styles from './index.less';
import { Ninja, Katana, Shuriken } from './store';
import type { Warrior, Weapon, ThrowableWeapon } from './types';
import { TYPES } from './types';

export default function() {
  const myContainer = new Container();
  myContainer.bind<Warrior>(TYPES.Warrior)
    .to(Ninja);
  myContainer.bind<Weapon>(TYPES.Weapon)
    .to(Katana);
  myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon)
    .to(Shuriken);
  console.log(myContainer);

  return (
    <div className={styles.container}>
      <Card size="small">
        dashboard
      </Card>
    </div>
  );
}

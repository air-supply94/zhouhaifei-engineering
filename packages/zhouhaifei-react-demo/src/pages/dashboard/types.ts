export interface Warrior {
  fight: () => string;
  sneak: () => string;
}

export interface Weapon {
  hit: () => string;
}

export interface ThrowableWeapon {
  throw: () => string;
}

export const TYPES = {
  Warrior: Symbol.for('Warrior'),
  Weapon: Symbol.for('Weapon'),
  ThrowableWeapon: Symbol.for('ThrowableWeapon'),
};


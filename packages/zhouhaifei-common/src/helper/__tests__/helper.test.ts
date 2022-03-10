import { add, formatPrice, multiple, thousandthSeparator, subtract, toFixed } from '../index';

describe('helper', () => {
  test('add', () => {
    expect(add(1, 1))
      .toBe(2);
    expect(add(1, NaN))
      .toBe(1);
    expect(add(0.1, 0.2))
      .toBe(0.3);
    expect(add(0.1, 0.7))
      .toBe(0.8);
    expect(add(0.2, 0.4))
      .toBe(0.6);
    expect(add(2.2, 0.1))
      .toBe(2.3);
  });

  test('subtract', () => {
    expect(subtract(1.5, 1.2))
      .toBe(0.3);
    expect(subtract(0.3, 0.2))
      .toBe(0.1);
  });

  test('multiply', () => {
    expect(multiple(19.9, 100))
      .toBe(1990);
    expect(multiple(1306377.64, 100))
      .toBe(130637764);
    expect(multiple(0.7, 180))
      .toBe(126);
    expect(multiple(4.01, 10))
      .toBe(40.1);
    expect(multiple(9.7, 100))
      .toBe(970);
    expect(multiple(39.7, 100))
      .toBe(3970);
  });

  test('formatPrice', () => {
    expect(formatPrice(199.222))
      .toBe(199.22);
    expect(formatPrice(199.2222222222, 4))
      .toBe(199.2222);
    expect(formatPrice(-100))
      .toBe(0);
    expect(formatPrice(Math.pow(2, 1023)))
      .toBe(0);
  });

  test('toFixed', () => {
    expect(toFixed(0, 4))
      .toBe('0.0000');
    expect(toFixed(4.01, 4))
      .toBe('4.0100');
    expect(toFixed(1.35))
      .toBe('1');
    expect(toFixed(1.35, 1))
      .toBe('1.4');
    expect(toFixed(1.335, 2))
      .toBe('1.34');
    expect(toFixed(1.3335, 3))
      .toBe('1.334');
    expect(toFixed(1.33335, 4))
      .toBe('1.3334');
    expect(toFixed(1.333335, 5))
      .toBe('1.33334');
    expect(toFixed(1.3333335, 6))
      .toBe('1.333334');
  });

  test('thousandthSeparator', () => {
    expect(thousandthSeparator(1234567894532))
      .toBe('1,234,567,894,532');
    expect(thousandthSeparator(673439.4542))
      .toBe('673,439.4542');
  });
});

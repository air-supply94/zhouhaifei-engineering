/**
 * 格式化number
 * @param num 数字
 */
export function formatNumber(num: unknown): number {
  const newNum = Number(num);
  return isFinite(newNum) ? newNum : 0;
}

/**
 * 浮点数相加
 * @param num1 数字1
 * @param num2 数字2
 */
export function add(num1: unknown, num2: unknown): number {
  let decimalLength1;
  let decimalLength2;
  const s1 = String(formatNumber(num1));
  const s2 = String(formatNumber(num2));
  try {
    decimalLength1 = s1.split('.')[1].length;
  } catch (e) {
    decimalLength1 = 0;
  }
  try {
    decimalLength2 = s2.split('.')[1].length;
  } catch (e) {
    decimalLength2 = 0;
  }

  const maxDecimalLength = Math.max(decimalLength1, decimalLength2);
  const newNum1 = Number(s1.replace('.', '')) * Math.pow(10, maxDecimalLength - decimalLength1);
  const newNum2 = Number(s2.replace('.', '')) * Math.pow(10, maxDecimalLength - decimalLength2);
  return (newNum1 + newNum2) / Math.pow(10, maxDecimalLength);
}

/**
 * 浮点数相减
 * @param num1 减数
 * @param num2 被减数
 */
export function subtract(num1: unknown, num2: unknown): number {
  return add(num1, -num2);
}

/**
 * 浮点数相乘
 * @param num1 数字1
 * @param num2 数字2
 */
export function multiple(num1: unknown, num2: unknown): number {
  let m = 0;
  const s1 = String(formatNumber(num1));
  const s2 = String(formatNumber(num2));

  try {
    m += s1.split('.')[1].length;
  } catch (e) {
    // nothing
  }
  try {
    m += s2.split('.')[1].length;
  } catch (e) {
    // nothing
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

/**
 * 保留小数点位数。Number.prototype.toFixed有bug
 * @param num 数字
 * @param decimalLength 小数点位数
 */
export function toFixed(num: unknown, decimalLength = 0): string {
  const newNum = Math.floor(multiple(num, Math.pow(10, decimalLength + 1)));
  const patchResult = (Math.floor(newNum / 10) + (newNum % 10 > 4 ? 1 : 0)) / Math.pow(10, decimalLength);
  const result = String(patchResult)
    .split('.');
  const resultInt = result[0];
  let resultDecimal = result[1] || '';
  while (resultDecimal.length < decimalLength) {
    resultDecimal = `${resultDecimal}0`;
  }

  return resultDecimal ? `${resultInt}.${resultDecimal}` : resultInt;
}

/**
 * 格式化价格
 * @param price 价格
 * @param decimalLength 小数点位数
 */
export function formatPrice(price: unknown, decimalLength = 2): number {
  const base = Math.pow(10, decimalLength);
  const transformPrice = Math.floor(multiple(price, base));
  if (isFinite(transformPrice) && transformPrice > 0) {
    return transformPrice / base;
  } else {
    return 0;
  }
}

/**
 * 千分位
 * @param num 数字
 */
export function thousandthSeparator(num: unknown): string {
  return String(formatNumber(num))
    .replace(/\d+/, (n) => n.replace(/(?!^)(?=(\d{3})+$)/g, ','));
}

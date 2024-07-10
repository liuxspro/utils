/** 获取某个数字的整数部分位数 */
export function get_digits(n: number): number {
  const integerPart = Math.floor(Math.abs(n)); // 取绝对值并向下取整
  return integerPart.toString().length;
}

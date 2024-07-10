/** 生成[n,m]的随机整数 */
export function random(minNum: number, maxNum?: number): number {
  // 生成[n,m]的随机整数
  let by_min = Math.random() * minNum + 1;
  if (maxNum) {
    let by_min_and_max = Math.random() * (maxNum - minNum + 1) + minNum;
    return parseInt(by_min_and_max.toString(), 10);
  } else {
    return parseInt(by_min.toString(), 10);
  }
}

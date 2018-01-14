function halvingSum(n) {
  let num = n, total = 1;
  while (num > 1) {
    total += num;
    num = Math.floor(num / 2);
  }
  return total;
}

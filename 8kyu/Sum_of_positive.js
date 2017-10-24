function positiveSum(arr) {
  let total = 0;
  arr.map(x => {
    if (x > 0) {
      total += x;
    }
  })
  return total;
}

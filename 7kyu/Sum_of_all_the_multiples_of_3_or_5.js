function findSum(n) {
  let x = 0;
  for (var i = 3; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      x += i;
    }
  }
  return x;
}

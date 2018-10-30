function SeriesSum(n) {
  let x = n > 0 ? 1 : 0,
      y = 1,
      z;
      n = x > 0 ? n-- : 0;
  while (n > 1) {
    y += 3;
    z = 1 / y;
    x+= z;
    n--;
  }
  return x.toFixed(2);
}

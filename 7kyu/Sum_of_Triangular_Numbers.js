function sumTriangularNumbers(n) {
  let total = 0, real = 0;
  for (var i = 1; i <= n; i++) {
    total += i;
    real += total;
  }
  return i > 1 ? real : 0;
}

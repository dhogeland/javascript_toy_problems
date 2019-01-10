function factorial(n) {
  if (n < 0 || n > 12) throw RangeError;
  let x = 1;
  for (var i = 1; i <= n; i++) {
    x *= i;
  }
  return x;
}

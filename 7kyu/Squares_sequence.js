function squares(x, n) {
  let y = n > 0 ? [x] : [];
  for (var i = 0; i < n - 1; i++) {
    y.push(y[i] * y[i]);
  }
  return y;
}

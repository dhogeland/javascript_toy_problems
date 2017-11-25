function displayLargeNumber(n) {
  let x = (n + '').split('');
  for (var i = x.length - 3; i > 0; i -= 3) {
    if (x[i - 1]) {
      x[i] = ',' + x[i];
    }
  }
  return x.join('');
}

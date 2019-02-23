function bubblesortOnce(a) {
  let x = a.slice();
  for (var i = 0; i < x.length - 1; i++) {
    if (x[i] > x[i + 1]) {
      let y = x[i];
      x[i] = x[i + 1];
      x[i + 1] = y;
    }
  }
  return x;
}

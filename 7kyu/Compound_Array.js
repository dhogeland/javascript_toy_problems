function compoundArray(a, b) {
  let x = Math.max(a.length, b.length),
      y = [];
  for (var i = 0; i < x; i++) {
    if (a[i] || a[i] === 0) y.push(a[i]);
    if (b[i] || b[i] === 0) y.push(b[i]);
  }
  return y;
}

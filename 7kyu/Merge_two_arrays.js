function mergeArrays(a, b) {
  let x = [],
      y = Math.max(a.length, b.length);
  for (var i = 0; i < y; i++) {
    if (a[i]) x.push(a[i]);
    if (b[i]) x.push(b[i]);
  }
  return x;
}

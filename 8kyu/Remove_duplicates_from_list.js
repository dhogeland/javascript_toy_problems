function distinct(a) {
  let x = [];
  for (var i = 0; i < a.length; i++) {
    if (!x.includes(a[i])) {
      x.push(a[i]);
    }
  }
  return x;
}

function digitize(n) {
  let x = n + '', y = [];
  for (var i = 0; i < x.length; i++) {
    y.push(+x[i]);
  }
  return y;
}

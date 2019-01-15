function extraPerfect(n){
  let x = [];
  for (var i = 1; i <= n; i++) {
    let y = i.toString(2);
    if (y[0] == y[y.length - 1]) {
      x.push(i);
    }
  }
  return x;
}

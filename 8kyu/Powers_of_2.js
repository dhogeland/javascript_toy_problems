function powersOfTwo(n){
  let x = [1];
  for (var i = 1; i <= n; i++) {
    x.push(2 ** i);
  }
  return x;
}

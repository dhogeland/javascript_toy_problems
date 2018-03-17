function sumMul(n,m){
  if (m <= n) {
    return 'INVALID';
  }
  let total = 0;
  for (var i = 1; (i*n) < m; i++) {
    total += i * n;
  }
  return total;
}

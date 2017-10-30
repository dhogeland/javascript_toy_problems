function digPow(n, p){
  let x = (n + '').split(''),
      total = 0;
  for (var i = 0; i < x.length; i++) {
    total += Math.pow(x[i], p);
    p++;
  }
  if (total/n == Math.floor(total/n)) {
    return total/n;
  }
  return -1;
}

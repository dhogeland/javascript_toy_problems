function specialNumber(n){
  let arr = ['0','1','2','3','4','5'],
      x = n + '';
  for (var i = 0; i < x.length; i++) {
    if (!arr.includes(x[i])) {
      return 'NOT!!';
    }
  }
  return 'Special!!';
}

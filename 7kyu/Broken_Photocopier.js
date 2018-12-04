function broken(x){
  let y = x.split('');
  for (var i = 0; i < y.length; i++) {
    if (y[i] == '0') {
      y[i] = '1'
    } else {
      y[i] = '0'
    }
  }
  return y.join('');
}

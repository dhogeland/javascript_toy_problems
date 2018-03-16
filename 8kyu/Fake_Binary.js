function fakeBin(x){
  x = x.split('');
  for (var i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      x[i] = '0';
    } else {
      x[i] = '1'
    }
  }
  return x.join('');
}

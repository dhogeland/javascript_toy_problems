function makeString(s){
  let x = '',
      y = s.split(' ');
  for (var i = 0; i < y.length; i++) {
    x += y[i][0];
  }
  return x;
}

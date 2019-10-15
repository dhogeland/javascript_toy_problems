var vampire_test = function(a, b){
  let x = (a * b + '').split(''),
      y = (a + '' + b).split('');
  for (var i = 0; i < y.length; i++) {
    if (x.includes(y[i])) {
      x[x.indexOf(y[i])] = '';
    } else {
      return false;
    }
  }
  return true;
}

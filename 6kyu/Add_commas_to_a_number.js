function commas(num){
  let x;
  if ((num + '').includes('.')) {
    x = num.toFixed(3) + '';
    while (x[x.length - 1] == '0') {
      x = x.split('')
      x.pop();
      x = x.join('');
    }
  } else {
    x = num + '.';
  }
  x = x.split('.');
  x[0] = x[0].split('');
  for (var i = x[0].length - 3; i > 0; i=i-3) {
    if (x[0][i - 1] != '-') {
      x[0][i] = ',' + x[0][i];
    }
  }
  x[0] = x[0].join('');
  return x[1].length ? x.join('.') : x[0];
}

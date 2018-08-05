var numberFormat = function (number) {
  let x = String(number).split(''),
      y = '',
      z = 0;
  for (var i = x.length - 1; i >= 0; i--) {
    if (z % 3 == 0 && x[i] != '-' && z > 0) {
      y = ',' + y;
    }
    y = x[i] + y;
    z++;
  }
  return y;
};

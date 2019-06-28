function unusedDigits(){
  let x = '0123456789',
      y = [...arguments].join(''),
      z = '';
  for (var i = 0; i < x.length; i++) {
     if (!y.includes(x[i])) {
       z += x[i];
     }
  }
  return z;
}

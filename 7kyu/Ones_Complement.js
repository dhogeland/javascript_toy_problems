function onesComplement(n) {
  let x = n.split('');
  for (var i = 0; i < x.length; i++) {
    if (x[i] == 1) {
      x[i] = 0;
    } else {
      x[i] = 1;
    }
  }
  return x.join('');
};

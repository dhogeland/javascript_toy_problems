function sortMyString(S) {
  let x = S.split(''), a = '', b = '';
  for (var i = 0; i < x.length; i++) {
    if (i % 2 == 0) {
      a += x[i];
    } else {
      b += x[i];
    }
  }
  return a + ' ' + b;
}

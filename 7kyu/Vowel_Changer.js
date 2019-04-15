function vowelChange(str, vow) {
  let x = 'aeiou',
      y = str.split('');
  for (var i = 0; i < y.length; i++) {
    if (x.includes(y[i])) {
      y[i] = vow;
    }
  }
  return y.join('');
}

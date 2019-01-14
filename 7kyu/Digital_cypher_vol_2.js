function decode  (code, n) {
  let x = (n + '').split(''),
      y = '';
  while (x.length < code.length) {
    for (var i = 0; i < (n + '').length; i++) {
      x.push((n + '')[i]);
    }
  }
  for (var i = 0; i < code.length; i++) {
    y += String.fromCharCode((code[i] - +x[i]) + 96);
  }
  return y;
}

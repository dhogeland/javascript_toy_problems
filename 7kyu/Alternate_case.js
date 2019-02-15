function alternateCase(s) {
  let x = s.slice(0).split('');
  for (var i = 0; i < s.length; i++) {
    if (x[i].toUpperCase() == s[i]) {
      x[i] = x[i].toLowerCase();
    } else {
      x[i] = x[i].toUpperCase();
    }
  }
  return x.join('');
}

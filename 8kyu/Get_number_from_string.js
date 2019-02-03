function getNumberFromString(s) {
  let x = s.split(''),
      y = '';
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      y += x[i];
    }
  }
  return +y;
}

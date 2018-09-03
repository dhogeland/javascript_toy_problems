function generateHashtag (str) {
  let x = str.trim();
  if (x.length == 0 || x.split(' ').join('').length >= 140) return false;
  x = x.split(' ')
  for (var j = 0; j < x.length; j++) {
    x[j] = x[j].split('');
    if (x[j][0]) {
      x[j][0] = x[j][0].toUpperCase();
      x[j] = x[j].join('');
    }
  }
  return '#' + x.join('');
}

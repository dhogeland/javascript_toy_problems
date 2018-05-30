function apparently(string) {
  if (string.length == 0) return '';
  let x = string.split(' ');
  for (var i = 0; i < x.length; i++) {
    if (x[i + 1] != 'apparently' && (x[i] == 'and' || x[i] == 'but')) {
      x[i] = x[i] + ' apparently';
    }
  }
  return x.join(' ');
}

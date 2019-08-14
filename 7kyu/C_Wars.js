function initials(n){
  let x = '';
  n = n.split(' ');
  for (var i = 0; i < n.length - 1; i++) {
    x += n[i][0].toUpperCase() + '.';
  }
  return x + n[i];
}

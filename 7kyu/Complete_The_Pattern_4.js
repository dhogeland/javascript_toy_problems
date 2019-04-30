function pattern(n){
  let x = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 0; i + j <= n; j++) {
      x += i + j;
    }
    x += ' ';
  }
  return x.trim().split(' ').join('\n');
}

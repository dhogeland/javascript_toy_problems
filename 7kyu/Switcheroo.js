function switcheroo(x){
  x = x.split('');
  for (var i = 0; i < x.length; i++) {
    if (x[i] == 'a') {
      x[i] = 'b';
    } else if (x[i] == 'b') {
      x[i] = 'a';
    }
  }
  return x.join('');
}

function change(string){
  let x = string.toLowerCase(),
      y = 'abcdefghijklmnopqrstuvwxyz',
      z = '';
  for (var i = 0; i < y.length; i++) {
    if (x.includes(y[i])) {
      z += 1;
    } else {
      z += 0;
    }
  }
  return z;
}

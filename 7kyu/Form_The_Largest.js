function maxNumber(n){
  let x = (n + '').split('');
  for (var i = 0; i < x.length; i++) {
    x[i] = +x[i];
  }
  let y = x.sort((a,b) => a - b), z = [];
  for (var i = y.length - 1; i >= 0; i--) {
    z.push(y[i]);
  }
  return +z.join('');
}

function superSize(num){
  let x = ('' + num).split(''),
      y = '',
      z = x.length;
  for (var i = 0; i < x.length; i++) {
    x[i] = +x[i];
  }
  for (var i = 0; i < z; i++) {
    y += Math.max(...x);
    x.splice(x.indexOf(Math.max(...x)), 1, '');
  }
  return +y;
}

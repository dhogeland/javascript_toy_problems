function reverse(str){
  let x = str.split(' ');
  for (var i = 1; i < x.length; i++) {
    if (i % 2 != 0) {
      x[i] = x[i].split('').reverse().join('');
    }
  }
  return x.join(' ');
}

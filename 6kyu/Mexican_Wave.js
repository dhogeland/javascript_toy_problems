function wave(x){
  let arr = [];
      x = x.split('');
  for (var i = 0; i < x.length; i++) {
    if (x[i] != ' ') {
      x[i] = x[i].toUpperCase();
      arr.push(x.join(''));
      x[i] = x[i].toLowerCase()
    }
  }
  return arr;
}

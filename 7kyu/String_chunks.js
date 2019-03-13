function stringChunk(str, n) {
  let x = [],
      i = 0;
  while (n > 0 && str.length) {
    x[i] = '';
    for (var j = 0; j < n; j++) {
      x[i] += str[j] ?  str[j] : '';
    }
    str = str.split('');
    str.splice(0,n,'');
    str = str.join('');
    i++;
  }
  return x;
}

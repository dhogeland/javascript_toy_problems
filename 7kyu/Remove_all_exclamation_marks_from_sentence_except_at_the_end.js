function remove(s){
  let x = [s[s.length - 1]];
  for (var i = s.length - 2; i >= 0; i--) {
    if (s[i] != '!') {
      x.unshift(s[i]);
    } else if (x[0] == '!') {
      x.unshift(s[i]);
    }
  }
  return x.join('');
}

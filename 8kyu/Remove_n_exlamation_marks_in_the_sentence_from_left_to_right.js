function remove(s,n){
  let x = 0;
  s = s.split('');
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '!' && x < n) {
      s[i] = '';
      x++;
    }
  }
  return s.join('');
}

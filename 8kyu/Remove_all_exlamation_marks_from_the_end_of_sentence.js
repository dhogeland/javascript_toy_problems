function remove(s){
  s = s.split('');
  while (s[s.length - 1] == '!') {
    s.pop();
  }
  return s.join('');
}

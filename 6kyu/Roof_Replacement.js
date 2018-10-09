function roofFix(s, x){
  let a = s.split(''),
      b = x.split('');
  for (var i = 0; i < s.length; i++) {
    if (b[i] == '\\' || b[i] == '/') {
      if (s[i] != ' ') {
        return false;
      }
    }
  }
  return true;
}

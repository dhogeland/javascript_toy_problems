function longestRepetition(s) {
  let x = 1, y = s[0] || '', z = '', a = 1;
  for (var i = 1; i < s.length; i++) {
    if (s[i] == y) {
      a += 1;
      if (a > x) {
        x = a;
        z = s[i];
      }
    } else {
      a = 1;
      y = s[i];
    }
  }
  return [z,x == 1 ? 0 : x];
}

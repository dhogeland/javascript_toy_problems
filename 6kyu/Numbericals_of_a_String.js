function numericals(s){
  let x = {}, y = '';
  for (var i = 0; i < s.length; i++) {
    if (!x[s[i]]) {
      x[s[i]] = 1;
      y += 1;
    } else {
      x[s[i]] += 1;
      y += x[s[i]];
    }
  }
  return y;
}

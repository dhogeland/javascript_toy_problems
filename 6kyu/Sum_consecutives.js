function sumConsecutives(s) {
  let x = [],
      y = s[0];
  for (var i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      y += s[i];
    } else {
      x.push(y);
      y = s[i];
    }
  }
  x.push(y);
  return x;
}

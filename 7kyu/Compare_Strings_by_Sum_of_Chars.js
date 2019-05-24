function compare(s1, s2) {
  let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      x = 0,
      y = 0;
  s1 = s1 ? s1 : '';
  s2 = s2 ? s2 : '';
  for (var i = 0; i < s1.length; i++) {
    if (abc.includes(s1[i].toUpperCase())) {
      x += s1.toUpperCase().charCodeAt(i);
    } else {
      x = 0;
      break;
    }
  }
  for (var i = 0; i < s2.length; i++) {
    if (abc.includes(s2[i].toUpperCase())) {
      y += s2.toUpperCase().charCodeAt(i);
    } else {
      y = 0;
      break;
    }
  }
  return x === y;
}

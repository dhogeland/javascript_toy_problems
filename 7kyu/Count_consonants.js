function consonantCount(str) {
  str = str.split(' ' ).join('').toLowerCase();
  let consts = 'bcdfghjklmnpqrstvwxyz',
      count = 0;
  for (var i = 0; i < str.length; i++) {
    if (consts.includes(str[i])) {
      count++;
    }
  }
  return count;
}

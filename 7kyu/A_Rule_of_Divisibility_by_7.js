function seven(m) {
  let x = m + '',
      y = 0,
      z;
  while (x.length > 2) {
    x = x.split('');
    z = x.pop();
    x = x.join('');
    x = +x;
    x = (x - (+z * 2)) + '';
    y++;
  }
  return [+x, y];
}

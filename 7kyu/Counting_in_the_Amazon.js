function countArara(n) {
  let x = '';
  while (n > 2) {
    x += 'adak ';
    n -= 2;
  }
  if (n == 1) x += 'anane';
  if (n == 2) x += 'adak';
  return x;
}

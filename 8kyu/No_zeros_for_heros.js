function noBoringZeros(n) {
  let x = (n + '').split(''), y = x.length - 1;
  while (x[y] == '0' && y != 0) {
    x.pop();
    y--;
  }
  return +(x.join(''));
}

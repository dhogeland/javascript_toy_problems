function kira(a, b, c) {
  let x = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] % b[i] > x) {
      x = a[i] % b[i];
    }
  }
  if (x % 2 == 0) {
    return c.toLowerCase();
  } return c.toUpperCase();

}

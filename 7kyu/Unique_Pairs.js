function projectPartners(n) {
  let x = 0, y = 1;
  for (var i = 2; i <= n; i++) {
    x += y;
    y++;
  }
  return x;
}

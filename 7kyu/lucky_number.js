function isLucky(n) {
  let x = (n + '').split(''), total = 0;
  for (var i = 0; i < x.length; i++) {
    total += +x[i];
  }
  return (total == 0 || total % 9 == 0);
}

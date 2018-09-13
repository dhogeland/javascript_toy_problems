function phoneCall(min1, min2_10, min11, s) {
  let x = 0;
  if (s >= min1) {
    x++;
    s -= min1;
  }
  while (x > 0 && x < 10 && s >= min2_10) {
    x++;
    s -= min2_10;
  }
  while (x > 9 && s >= min11) {
    x++;
    s -= min11;
  }
  return x;
}

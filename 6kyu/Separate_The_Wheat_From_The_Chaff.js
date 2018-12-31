function wheatFromChaff(values) {
  let x = values.length - 1;
  for (var i = 0; i < x; i++) {
    if (values[i] > 0) {
    let y = values[i];
      for (var j = x; x > i; x--) {
        if (values[x] < 0) {
          values[i] = values[x];
          values[x] = y;
          x--;
          break;
        }
      }
    }
  }
  return values;
}

function arrayMadness(a, b) {
  let aTotal = 0;
  let bTotal = 0;
  for (var i = 0; i < a.length; i++) {
    aTotal += a[i] * a[i]
  }
  for (var j = 0; j < b.length; j++) {
    bTotal += b[j] * b[j] * b[j]
  }
  return aTotal > bTotal;
}

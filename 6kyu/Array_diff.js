function array_diff(a, b) {
  for (var i = 0; i < b.length; i++) {
    for (var j = a.length - 1; j >= 0; j--) {
      if (a[j] == b[i]) {
        a.splice(j, 1);
      }
    }
  }
  return a;
}

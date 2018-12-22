function distribute(m, n) {
  let x = n > 0 ? Array(n).fill(0) : [];
  while (m > 0 && n > 0) {
    for (var i = 0; i < x.length; i++) {
      if (m > 0) {
        x[i] += 1;
        m--;
      } else {
        break;
      }
    }
  }
  return x;
}

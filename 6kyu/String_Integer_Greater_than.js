function stringIntGreaterThan(a, b) {
  if (+a != +b) {
    return +a > +b;
  }
  for (var i = 0; i < a.length; i++) {
    if (+a[i] < +b[i]) {
      return false
    } if (a.length - 1 == i && +a[i] == +b[i]) {
      return false
    }
  }
  return true
}

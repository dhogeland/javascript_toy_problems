function isDigit(s) {
  if (s && s != ' ') {
    return +s + 1 === 1 + +s;
  }
  return false;
}

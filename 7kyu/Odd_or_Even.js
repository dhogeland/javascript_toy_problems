function oddOrEven(array) {
  if (array.length == 0 || array.reduce((a,b) => a + b) % 2 == 0) {
    return 'even'
  }
  return 'odd';
}

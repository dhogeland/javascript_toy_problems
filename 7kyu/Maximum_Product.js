function adjacentElementsProduct(array) {
  let total = array[0] * array[1];
  for (var i = 1; i < array.length - 1; i++) {
    if (array[i] * array[i + 1] > total) {
      total = array[i] * array[i + 1];
    }
  }
  return total;
}

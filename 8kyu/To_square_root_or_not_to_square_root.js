function squareOrSquareRoot(array) {
  for (var i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) == Math.floor(Math.sqrt(array[i]))) {
      array[i] = Math.sqrt(array[i])
    } else {
      array[i] = array[i] * array[i];
    }
  }
  return array;
}

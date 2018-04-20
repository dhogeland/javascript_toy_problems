function rowWeights(array){
  let x = 0, y = 0;
  for (var i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      x += array[i]
    } else {
      y += array[i];
    }
  }
  return [x, y];
}

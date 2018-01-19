function multipleOfIndex(array) {
  let arr = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] % i == 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}

function evenNumbers(array, number) {
  let arr = [], x = array.length - 1;
  while (arr.length < number) {
    if (array[x] % 2 == 0) {
      arr.unshift(array[x]);
    }
    x--;
  }
  return arr;
}

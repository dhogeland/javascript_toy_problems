function oddOne(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return i;
    }
  }
  return -1;
}

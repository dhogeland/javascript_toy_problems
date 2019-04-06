function arrayLowerCase(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr;
}

function duplicates(arr) {
  let x = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      if (!x.includes(arr[i])) {
        x.push(arr[i]);
      }
    }
  }
  return x;
}

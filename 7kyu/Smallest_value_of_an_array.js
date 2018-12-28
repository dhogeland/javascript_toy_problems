function min(arr, toReturn) {
  let x = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < x) x = arr[i];
  }
  return toReturn == 'value' ? x : arr.indexOf(x);
}

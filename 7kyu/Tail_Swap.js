function tailSwap(arr) {
  arr[0] = arr[0].split(':');
  arr[1] = arr[1].split(':');
  let x = arr[0][1];
  arr[0][1] = arr[1][1];
  arr[1][1] = x;
  arr[0] = arr[0].join(':');
  arr[1] = arr[1].join(':');
  return arr;
}

function diffBig2(arr) {
  let x = Math.max(...arr);
  arr[arr.indexOf(x)] = 0;
  return x - Math.max(...arr);
}

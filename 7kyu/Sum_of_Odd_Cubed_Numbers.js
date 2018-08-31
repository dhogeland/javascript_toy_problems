function cubeOdd(arr) {
  let x = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') return undefined;
    arr[i] = arr[i] * arr[i] * arr[i];
    if (arr[i] % 2 != 0) {
      x += arr[i];
    }
  }
return x;
}

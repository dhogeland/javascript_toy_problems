function upArray(arr){
  let x = arr.join(''),
  y;
  if (x.length != arr.length || arr.length == 0) return null;
  x = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    if (i == arr.length - 1) {
      arr[i] += 1;
      if (arr[i] == 10) {
        arr[i] = 0;
        y = 1;
        x.unshift(arr[i]);
        i--;
      }
    } if (y == 1) {
      arr[i] +=1;
      y = 0;
      if (arr[i] == 10) {
        arr[i] = 0;
        y = 1;
      }
    }
    x.unshift(arr[i]);
  }
  return y == 1 ? [1,...x] : x;
}

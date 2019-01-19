function solve(arr){
  let x = [];
  for (var i = arr.length -1; i >= 0; i--) {
    if (!x.includes(arr[i])) {
      x.unshift(arr[i]);
    }
  }
  return x;
}

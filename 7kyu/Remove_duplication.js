function removeDuplication(arr){
  let x = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) && (arr[i] >= 0 || arr[i] < 0)) {
      x.push(arr[i]);
    }
  }
  return x;
}

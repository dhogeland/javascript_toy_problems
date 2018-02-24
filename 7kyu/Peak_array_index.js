function peak(arr){
 let total = arr[0];
 for (var i = 1; i < arr.length - 1; i++) {
  if (arr.slice(i + 1).reduce((a,b) => a + b) == total) {
    return i;
  }
  total += arr[i];
 }
 return -1;
}

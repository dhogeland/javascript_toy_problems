function repeats(arr){
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      total += arr[i];
    }
  }
  return total;
};

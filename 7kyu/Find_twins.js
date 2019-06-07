function elimination(arr){
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
  return null;
}

var maxSequence = function(arr){
  let count = 0,
      theCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (count + arr[i] < 0) {
      count = 0;
    } else {
      count += arr[i];
      if (count > theCount) {
        theCount = count;
      }
    }
  }
  return theCount;
}

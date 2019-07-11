var buy = function(x, arr){
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === x) {
        return [i, j];
      }
    }
  }
  return null;
};

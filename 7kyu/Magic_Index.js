function findMagic(arr){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === i) return i;
  }
  return -1;
}

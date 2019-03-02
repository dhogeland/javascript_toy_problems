function findMissingNumbers(arr){
  let x = [];
  for (var i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      x.push(i);
    }
  }
  return x;
}

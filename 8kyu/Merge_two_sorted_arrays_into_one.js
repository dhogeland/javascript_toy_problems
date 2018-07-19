function mergeArrays(arr1, arr2) {
  let x = [...arr1, ...arr2].sort((a,b) => a - b), y = [];
  for (var i = 0; i < x.length; i++) {
    if (!y.includes(x[i])) y.push(x[i]);
  }
  return y;
}

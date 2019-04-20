function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0 || arrayOfArrays.includes(null)) return 0;
  let x = arrayOfArrays.sort((a,b) => a.length - b.length);
  if (x[0].length === 0) return 0;
  for (var i = 0; i < x.length - 1; i++) {
    if (x[i].length + 1 < x[i + 1].length) return x[i].length + 1;
  }
}

function findEvenIndex(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (i === 0) {
      if ((arr.slice(1)).reduce((accum, current) => accum + current) === 0) {
        return 0;
      }
      i++;
    }
      if (arr.slice(i + 1).reduce((accum, current) => accum + current) ===
          arr.slice(0, i).reduce((accum, current) => accum + current)) {
        return i;
     }
  }
  return -1;
}

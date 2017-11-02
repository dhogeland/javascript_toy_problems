function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0;
  }
  array = array.sort((a,b) => {
    if (a < b) {return -1}
    if (a > b) {return 1}
    else { return 0}
  })
  let copy = array.slice(1, array.length - 1);
  return copy.reduce((acc, cur) => acc + cur);
}

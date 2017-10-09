function findUniq(arr) {
  let copy = arr.slice();
  copy.sort((a,b) => {
    return a - b;
  });
  if (copy[0] === copy[1]) {
    return copy[copy.length - 1];
  }
  return copy[0];
}

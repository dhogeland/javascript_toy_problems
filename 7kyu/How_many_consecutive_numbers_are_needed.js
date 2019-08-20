function consecutive(arr) {
  let x = arr.sort((a,b) => a - b);
  return x.length > 1 ? ((x[x.length - 1] - x[0]) + 1) - x.length : 0;
}

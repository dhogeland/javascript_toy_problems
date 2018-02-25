function remainder(a, b){
  let min = Math.min(a, b), max = Math.max(a,b);
  if (min == 0) {
    return NaN;
  }
  return max % min;
}

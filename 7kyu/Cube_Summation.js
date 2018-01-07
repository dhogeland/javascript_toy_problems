function cubeSum(n, m){
  let low = Math.min(n, m), high = Math.max(n, m), x = low + 1, total = 0;
  while (x <= high) {
    total += Math.pow(x, 3);
    x++;
  }
  return total;
}

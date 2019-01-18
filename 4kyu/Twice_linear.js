function dblLinear(n) {
  let x = [1],
      y = 0;
  while (y <= n * 5) {
    x.push(x[y] * 2 + 1);
    x.push(x[y] * 3 + 1);
    y++;
  }
  x.sort((a,b) => a - b);
  let z = new Set(x);
  return [...z][n];
}

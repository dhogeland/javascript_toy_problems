function rowSumOddNumbers(n) {
	let x = (n * (n - 1)) + 1;
  let total = x;
  for (var i = 1; i < n; i++) {
    x += 2;
    total += x;
  }
  return total;
}

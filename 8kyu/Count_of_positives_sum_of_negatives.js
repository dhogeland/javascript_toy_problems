function countPositivesSumNegatives(input) {
  if (!input) {
    return []
  }
  let total = 0, neg = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      total += 1;
    } else {
      neg += input[i];
    }
  }
  return input.length ? [total, neg] : [];
}

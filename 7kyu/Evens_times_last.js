function evenLast(numbers) {
  let total = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) {
      total += numbers[i] * numbers[numbers.length - 1];
    }
  }
  return total;
}

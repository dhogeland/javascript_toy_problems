function magicSum(numbers) {
  let total = 0;
  if (numbers) {
    for (var i = 0; i < numbers.length; i++) {
      if ((numbers[i] + '').includes('3') && numbers[i] % 2 != 0) {
        total += numbers[i];
      }
    }
  }
  return total;
}

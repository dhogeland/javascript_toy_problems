function meanVsMedian(numbers) {
  let x = 0;
  for (var i = 0; i < numbers.length; i++) {
    x += numbers[i]
  }
  x = x / numbers.length;
  numbers = numbers.sort(function(a,b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } return 0;
  });
  let y = numbers[Math.floor(numbers.length / 2)];
  return x === y ? 'same' : x > y ? 'mean' : 'median';
}

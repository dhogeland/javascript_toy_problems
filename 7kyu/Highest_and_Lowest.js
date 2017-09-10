function highAndLow(numbers){
  if (numbers.length === 1) {
    return numbers + ' ' + numbers;
  }
  let split = numbers.split(' ');
  let high = split.reduce(function(a, b) {
    return Math.max(a, b);
  })
  let low = split.reduce(function(a, b) {
    return Math.min(a, b);
  })
  return high + ' ' + low;
}

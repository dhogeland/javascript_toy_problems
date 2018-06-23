function priceIsRight(numbers, target) {
  if (numbers.indexOf(target) >= 0) return target;
  let arr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < target) {
      arr.push(numbers[i]);
    }
  }
  return arr.length > 0 ? Math.max(...arr) : undefined;
}

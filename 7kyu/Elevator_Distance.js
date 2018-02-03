function elevatorDistance(array) {
  let total = 0;
  for (var i = 0; i < array.length - 1; i++) {
    let arr = [array[i], array[i + 1]];
    total += Math.max(...arr) - Math.min(...arr);
  }
  return total;
}

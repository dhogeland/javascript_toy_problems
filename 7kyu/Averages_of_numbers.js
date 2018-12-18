function averages(numbers) {
  let x = [];
  if (numbers) {
    for (var i = 0; i < numbers.length - 1; i++) {
      x.push((numbers[i] + numbers[i + 1]) / 2)
    }
  }
  return x;
}

function stray(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}

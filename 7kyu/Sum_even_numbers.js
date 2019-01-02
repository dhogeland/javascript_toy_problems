function sumEvenNumbers(input) {
  let x = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
      x += input[i];
    }
  }
  return x;
}

function moveVowel(input) {
  let x = '',
      y = '';
  for (var i = 0; i < input.length; i++) {
    if ('aeiou'.includes(input[i])) {
      y += input[i];
    } else {
      x += input[i];
    }
  }
  return x + y;
}

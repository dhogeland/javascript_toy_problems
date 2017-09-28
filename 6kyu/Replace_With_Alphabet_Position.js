function alphabetPosition(text) {
  let numbers = '',
      string = text.toLowerCase(),
      exp = /[^a-z]/g;
  string = string.replace(exp, '');
  for (var i = 0; i < string.length; i++) {
    numbers += (string.charCodeAt(i) - 96);
    if (i < string.length -1) {
      numbers += ' ';
    }
  }
  return numbers;
}

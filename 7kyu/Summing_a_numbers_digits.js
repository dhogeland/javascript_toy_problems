function sumDigits(number) {
  let total = 0, str = (number + '');
  for (var i = 0; i < str.length; i++) {
    if (i == 0 && str[i] == '-') {
    } else {
      total += +str[i];
    }
  }
  return total;
}

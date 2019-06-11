function twoDecimalPlaces(number) {
  let x = number.toString().split('.');
  return +(x[0] + '.' + x[1][0] + x[1][1]);
}

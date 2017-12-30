function checkConcatenatedSum(num, x) {
  let str = Math.abs(num) + '', total = 0;
  str = str.split('');
  for (var i = 0; i < str.length; i++) {
  let test = '';
    for (var j = 0; j < x; j++) {
      test += str[i];
    }
    total += +test;
  }
  return total == Math.abs(num);
}

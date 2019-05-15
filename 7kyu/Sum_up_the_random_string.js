function sumFromString(str){
  let total = 0,
      nums = '1234567890';
  for (var i = 0; i < str.length; i++) {
    while (!nums.includes(str[i]) && i < str.length) {
      i++;
    }
    let hold = str[i] ? str[i] : '';
    while (nums.includes(str[i + 1]) && i < str.length) {
      i++;
      hold += str[i];
    }
    total += +hold;
  }
  return total;
}

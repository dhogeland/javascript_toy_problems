function createPhoneNumber(numbers){
  let phone = '(';
  for (var i = 0; i < numbers.length; i++) {
    if (i == 2) {
      phone += numbers[i] + ') ';
    } else if (i == 5) {
        phone += numbers[i] + '-';
      } else {
        phone += numbers[i];
    }
  }
  return phone
}

function century(year) {
  let str = year + '';
  str = str.split('');
  if (year < 100) {
    return 1;
  } if (str.length == 3) {
    if (str[1] >= 1 || str[2] >= 1) {
      return +str[0] + 1;
    } else {
      return +str[0];
    }
  } if (str[2] >= 1 || str[3] >= 1) {
    return +(str[0] + str[1]) + 1;
  } else {
    return +(str[0] + str[1]);
  }
}

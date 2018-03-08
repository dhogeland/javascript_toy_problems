function getIssuer(number) {
  number = number.toString();
  if ((number.substring(0,2) == '34' || number.substring(0,2) == '37') && number.length == 15) {
    return 'AMEX';
  } else if (number.substring(0,4) == '6011' && number.length == 16) {
    return 'Discover';
  } else if ((+number.substring(0,2) >= 51 && +number.substring(0,2) <= 55) && number.length == 16) {
    return 'Mastercard';
  } else if (number[0] == '4' && (number.length == 13 || number.length == 16)) {
    return 'VISA';
  }
  return 'Unknown';
}

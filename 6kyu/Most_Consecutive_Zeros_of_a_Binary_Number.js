function maxConsecZeros(n){
  let x = (+n).toString(2), length = 0;
  x.split('1').forEach(elem => {
    elem.length > length ? length = elem.length : elem = null;
  });
  if (length == 0) {
    return "Zero";
  } if (length == 1) {
    return "One";
  } if (length == 2) {
    return "Two";
  } if (length == 3) {
    return "Three";
  } if (length == 4) {
    return "Four";
  } if (length == 5) {
    return "Five";
  } if (length == 6) {
    return "Six";
  } if (length == 7) {
    return "Seven";
  } if (length == 8) {
    return "Eight";
  } if (length == 9) {
    return "Nine";
  } if (length == 10) {
    return "Ten";
  } if (length == 11) {
    return "Eleven";
  } if (length == 12) {
    return "Twelve";
  } if (length == 13) {
    return "Thirteen";
  } if (length == 14) {
    return "Fourteen";
  } if (length == 15) {
    return "Fifteen";
  }
}

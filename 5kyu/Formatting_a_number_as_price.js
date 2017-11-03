var numberToPrice = function(number) {
  if (isNaN(number) || !number) {
    return 'NaN'
  } else if (!(number + '').includes('.')) {
      number = number.toString() + '.00';
  }
  let myNumber = number.toString().split('.'),
  dollars = myNumber[0].split('');
  if ((myNumber[1]).length < 2) {
    myNumber[1] += '0';
  }
  let cents = myNumber[1][0] + myNumber[1][1];
  if (dollars.length > 3) {
    for (var i = dollars.length - 3; i >= 1; i--) {
      if (i - 1 != '-') {
      dollars.splice(i, 0, ',')
      i -= 2;
      }
    }
  }
  if (dollars[0] == '-' && dollars[1] == ',') {
    dollars.splice(1, 1);
  }
  return (dollars.join('') + '.' + cents)
}

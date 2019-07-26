function sign(number){
console.log(number)
  if (number === 0 || number === '0') {
    return 0;
  } else if (typeof number === 'object') {
    if (+number[0] === 0) {
      return 0;
    } else if (+number[0] <= 0) {
      return -1;
    } else if (+number[0] >= 0 && number.length === 1) {
      return 1;
    }
    return NaN;
  }else if (number <= 0 || +number <= 0 ) {
    return -1;
  } else if (typeof number !== 'object' && (number > 0 || +number > 0)) {
    return 1;
  }
  return NaN;
}

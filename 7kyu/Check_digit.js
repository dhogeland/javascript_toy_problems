function checkDigit(number, index1, index2, digit) {
  let split = (number + '').split(''),
      min = Math.min(index1, index2),
      max = Math.max(index1, index2) + 1,
      search = split.slice(min, max);
  return search.includes(digit + '');
};

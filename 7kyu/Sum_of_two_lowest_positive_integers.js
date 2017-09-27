function sumTwoSmallestNumbers(numbers) {
  let lowest = numbers.slice().sort((a,b) => a -b);
  return lowest[0] + lowest[1];
};

function removeSmallest(numbers) {
  let copy = numbers.slice();
  copy.sort((a, b) => {
    if (a < b) {
      return -1;
    } if (a > b) {
      return 1;
    } return 0;
  });
  numbers.splice(numbers.indexOf(copy[0]), 1);
  return numbers;
}

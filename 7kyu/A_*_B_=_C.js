function findAB(numbers,c){
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] == c) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return null;
}

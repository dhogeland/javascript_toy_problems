function getEvenNumbers(numbersArray){
  let x = [];
  for (var i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 == 0) {
      x.push(numbersArray[i]);
    }
  }
  return x;
}

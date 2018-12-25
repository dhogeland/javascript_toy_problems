var gimme = function (inputArray) {
  return inputArray.indexOf(Array.of(inputArray[0],inputArray[1],inputArray[2]).sort((a,b) => a - b)[1]);
};

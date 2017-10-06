function comp(array1, array2){
  if (!array2 || !array1) {
    return false;
  }
  let myArray = array2.slice(),
      index;
  for (var i = 0; i < array1.length; i++) {
    index = myArray.indexOf(array1[i] * array1[i]);
      if (index === -1) {
        return false;
      } else {
        myArray.splice(index, 1)
      }
  }
  return true;
}

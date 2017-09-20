function duplicateEncode(word){
  let split = word.toLowerCase().split('');
  let myArray = [];
  for (var i = 0; i < split.length; i++) {
    if (!myArray[i]) {
      if (split.lastIndexOf(split[i]) !== i) {
        myArray[i] = ')';
        myArray[split.lastIndexOf(split[i])] = ')';
      } else {
        myArray[i] = '(';
      }
    }
  }
  return myArray.join('');
}

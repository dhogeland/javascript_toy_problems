function formatWords(words){
  if (!words) {
    return '';
  }
  let myArray = [];
  let sentence = '';
  if (words.length == 0) {
    return '';
  }
  for (var i = 0; i < words.length; i++) {
    if (words[i] !=  '') {
      myArray.push(words[i])
    }
  }
  if (myArray.length == 1) {
      return myArray[0];
  }
  if (myArray.length == 2) {
    sentence += myArray[0] + ' and ' + myArray[1];
    return sentence;
  }
  for (var j = 0; j < myArray.length; j++) {
   if (j == myArray.length - 1) {
     sentence += " and " + myArray[j];
   } else if (j == myArray.length - 2) {
     sentence += myArray[j]
   } else {
     sentence += myArray[j] + ', '
   }
  }
  return sentence;
}

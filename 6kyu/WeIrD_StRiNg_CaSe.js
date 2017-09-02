function toWeirdCase(string){
  let split = string.split(" ");
  let myArray = [];
  for (var i = 0; i < split.length; i++) {
    myArray[i] = split[i].split('');
  }
  for (var j = 0; j < myArray.length; j++) {
    for (var k = 0; k < myArray[j].length; k++) {
      if (k % 2 == 0) {
        myArray[j][k] = myArray[j][k].toUpperCase();
      }
    }
    myArray[j] = myArray[j].join('');
  }
  return myArray.join(' ');
}

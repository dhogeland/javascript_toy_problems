function arrAdder(arr) {
  let words = [];
  for (var i = 0; i < arr[0].length; i++) {
  let myArray = [];
    for (var j = 0; j < arr.length; j++) {
      if (arr[j][i]) {
      myArray.push(arr[j][i])
      }
    }
    words.push(myArray.join(""))
  }
  return words.join(" ");
}

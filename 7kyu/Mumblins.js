function accum(s) {
	let split = s.toLowerCase().split('');
  let myArray = [];
  if (split.length === 1) {
    return split[0].toUpperCase;
  }
  for (var i = 0; i < split.length; i++) {
    myArray.push([]);
    myArray[i].push(split[i].toUpperCase());
    if (i !== 0) {
      do {
        myArray[i].push(split[i])
      } while (myArray[i].length <= i)
      myArray[i] = myArray[i].join('');
    }
  }
  return myArray.join('-');
}

ar uniqueInOrder=function(iterable){
  if (typeof iterable == 'string') {
    iterable = iterable.split('')
  }
  let myArray = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) {
    myArray.push(iterable[i])
    }
  }
  return myArray;
}

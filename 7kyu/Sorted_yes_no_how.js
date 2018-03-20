function isSortedAndHow(array) {
  let copy = array.slice();
  copy.sort(function(a,b) {return a - b});
  if (JSON.stringify(array) === JSON.stringify(copy)) {
    return 'yes, ascending';
  }
  copy.sort((a,b) => b - a)
  if (JSON.stringify(array) === JSON.stringify(copy)) {
    return 'yes, descending';
  } return 'no';
}

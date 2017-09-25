function duplicateCount(text){
  let split = text.toLowerCase().split(''),
      count = 0;
  for (var i = split.length - 1; i > 0; i--) {
    let letter = split.pop(),
        theLength = split.length;
    split = split.filter(index => index != letter);
    split.length != theLength ? count++ : count + 0;
  }
  return count;
}

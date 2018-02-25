function wordsToMarks(string){
  let str = 'abcdefghijklmnopqrstuvwxyz', total = 0;
  for (var i = 0; i < string.length; i++) {
    total += str.indexOf(string[i]) + 1;
  }
  return total;
}

function findShort(s){
  let words = s.split(' ');
  let word = words[0].length;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length < word) {
      word = words[i].length
    }
  }
  return word;
}

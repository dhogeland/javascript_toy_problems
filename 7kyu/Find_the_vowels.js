function vowelIndices(word){
  let lower = word.toLowerCase(), vowels = 'aeiouy', arr = [];
  for (var i = 0; i < word.length; i++) {
    if (vowels.indexOf(lower[i]) != -1) {
      arr.push(i + 1);
    }
  }
  return arr;
}

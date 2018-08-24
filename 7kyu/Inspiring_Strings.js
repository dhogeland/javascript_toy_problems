function longestWord(stringOfWords){
  let x = '', y = stringOfWords.split(' ');
  for (var i = 0; i < y.length; i++) {
    if (y[i].length >= x.length) x = y[i];
  }
  return x;
}

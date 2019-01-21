function anagramCounter (wordsArray) {
  let x = 0;
  for (var i = 0; i < wordsArray.length - 1; i++) {
    wordsArray[i] = wordsArray[i].split('').sort((a,b) => a < b).join('');
    for (var j = i + 1; j < wordsArray.length; j++) {
      if (wordsArray[i] == wordsArray[j].split('').sort((a,b) => a < b).join('')) {
        x += 1;
      }
    }
  }
  return x;
}

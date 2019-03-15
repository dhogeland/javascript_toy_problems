function countCorrectCharacters(correctWord, guess){
  if (correctWord.length !== guess.length) {
    throw 'Words are not the same length';
  }
  let x = 0;
  for (var i = 0; i < guess.length; i++) {
    x += correctWord[i] === guess[i] ? 1 : 0;
  }
  return x;
}

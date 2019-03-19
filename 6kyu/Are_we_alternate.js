function isAlt(word) {
  let abc = 'aeiouAEIOU',
      now = abc.includes(word[0]);
  for (var i = 1; i < word.length; i++) {
    if (now === abc.includes(word[i])) {
      return false;
    }
    now = !now;
  }
  return true;
}

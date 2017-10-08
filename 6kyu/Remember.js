function remember(str) {
  let repeats = [], letters = [];
  for (var i = 0; i < str.length; i++) {
    if (letters.includes(str[i]) && !repeats.includes(str[i])) {
      repeats.push(str[i]);
    }
    if (!letters.includes(str[i])) {
      letters.push(str[i]);
    }
  }
  return repeats;
}

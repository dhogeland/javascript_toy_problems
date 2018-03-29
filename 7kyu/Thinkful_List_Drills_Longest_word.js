function longest(words) {
  let long = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > long) {
      long = words[i].length;
    }
  }
  return long;
}

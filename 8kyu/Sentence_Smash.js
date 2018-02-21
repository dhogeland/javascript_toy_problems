function smash (words) {
  let sen = '';
  for (var i = 0; i < words.length; i++) {
    if (i < words.length - 1) {
      sen += words[i] + ' ';
    } else {
      sen += words[i];
    }
  }
  return sen;
};

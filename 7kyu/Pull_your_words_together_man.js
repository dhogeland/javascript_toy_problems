function sentencify(words) {
  words[0] = words[0].split('');
  words[0][0] = words[0][0].toUpperCase();
  words[0] = words[0].join('');
  return words.join(' ') + '.';
}

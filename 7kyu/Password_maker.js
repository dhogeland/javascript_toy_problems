function makePassword(phrase) {
  let word = '',
      x = phrase.split(' ');
  for (var i = 0; i < x.length; i++) {
    if (x[i][0] == 'i' || x[i][0] == 'I') {
      word += 1;
    } else if (x[i][0] == 'o' || x[i][0] == 'O') {
      word += 0;
    } else if (x[i][0] == 's' || x[i][0] == 'S') {
      word += 5;
    } else {
      word += x[i][0]
    }
  }
  return word;
}

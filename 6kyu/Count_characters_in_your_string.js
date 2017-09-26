function count (string) {
  let split = string.split('');
  let letters = {};
  for (var i = 0; i < split.length; i++) {
    if (!Object.keys(letters).includes(split[i])) {
      letters[split[i]] = 1;
    } else {
      letters[split[i]] += 1;
    }
  }
  return letters;
}

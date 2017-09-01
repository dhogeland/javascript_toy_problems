function reverseWords(str) {
  let split = str.split(' ');
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i].split('').reverse().join('');
  }
  return split.join(' ');
}

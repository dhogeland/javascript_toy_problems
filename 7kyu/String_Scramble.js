function scramble(str, arr) {
  let x = 0, word = [], split = str.split('');;
  while (x < str.length) {
    word[arr[x]] = str[x];
    x++;
  }
  return word.join('');
};

function replaceNth(text, n, oldValue, newValue) {
  let x = 0;
  text = text.split('');
  for (var i = 0; i < text.length; i++) {
    if (text[i] === oldValue) {
      x++;
      if (x === n) {
        x = 0;
        text[i] = newValue;
      }
    }
  }
  return text.join('');
}

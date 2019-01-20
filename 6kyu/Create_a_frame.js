const frame = (text, char) => {
  let x = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > x) {
      x = text[i].length;
    }
    text[i] = ' ' + text[i] + ' ';
  }
  for (var i = 0; i < text.length; i++) {
    while (text[i].length < x + 2) {
      text[i] += ' ';
    }
  }
  let y = [char];
  while (y[0].length <= x + 2) {
    y[0] += char;
  }
  for (var i = 0; i < text.length; i++) {
    y.push(text[i]);
  }
  let z = y[0];
  y.push(z);
  return y.join(char + '\n' + char);
};

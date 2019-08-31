function rot13(str) {
  let x = '';
  for (var i = 0; i < str.length; i++) {
    let y = str.charCodeAt(i);
    x += ((y >= 65 && y <= 77) || (y >= 97 && y <= 109))
      ? String.fromCharCode(y + 13)
      : ((y >= 78 && y <= 90) || (y >= 110 && y <= 122))
      ? String.fromCharCode(y - 13)
      : str[i];
  }
  return x;
}

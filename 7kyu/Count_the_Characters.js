function countChar(string, char) {
  let x = string.toLowerCase().split(''),
      y = 0;
  x.map((z) => z == char.toLowerCase() ? y++ : y += 0);
  return y;
}

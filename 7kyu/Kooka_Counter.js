var kookaCounter = function(laughing) {
  laughing = laughing.split('a').join('');
  let x = laughing.length ? 1 : 0,
      y = 0;
  while (y < laughing.length - 1) {
    if (laughing[y] != laughing[y + 1]) {
      x++;
    }
    y++;
  }
  return x;
}

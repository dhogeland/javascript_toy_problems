function findSpaceship(map) {
  let x = map ? map.split('\n') : ['.'],
      y = -1;
  for (var i = 0; i < x.length; i++) {
    if (x[i].includes('X')) {
      y = x[i].indexOf('X');
      break;
    }
  }
  return y >= 0 ? [y, x.length - i - 1] : 'Spaceship lost forever.';
}

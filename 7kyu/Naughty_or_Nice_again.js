function whatListAmIOn(actions){
  let x = 0,
      y = 0;
  for (var i = 0; i < actions.length; i++) {
    if ('bfkBFK'.includes(actions[i][0])) {
       y += 1;
    } else if ('gsnGSN'.includes(actions[i][0])) {
      x += 1;
    }
  }
  return x > y ? 'nice' : 'naughty';
}

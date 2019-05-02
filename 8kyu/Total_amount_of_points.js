function points(games) {
  let total = 0;
  for (var i = 0; i < games.length; i++) {
    if (+games[i][0] > +games[i][2]) {
      total += 3;
    } else if (+games[i][0] === +games[i][2]) {
      total += 1;
    }
  }
  return total;
}

function calculateTotal(team1, team2) {
  var t1s = team1.length ? team1.reduce((t, c) => t + c) : 0;
  var t2s = team2.length ? team2.reduce((t, c) => t + c) : 0;
  return t1s > t2s;
}

function shoot(x){
  let a = 0,
      b = 0,
      c;
  for (var i = 0; i < x.length; i++) {
    c = x[i][1] ? 2 : 1;
    if (x[i][0].P1 == 'XX') {
      a += (2 * c);
    } else if (x[i][0].P1 == 'XO' || x[i][0].P1 == 'OX') {
      a += (1 * c);
    }
    if (x[i][0].P2 == 'XX') {
      b += (2 * c);
    } else if (x[i][0].P2 == 'XO' || x[i][0].P2 == 'OX') {
      b += (1 * c);
    }
  }
  return a == b ? 'Draw!' : a > b ? 'Pete Wins!' : 'Phil Wins!';
}

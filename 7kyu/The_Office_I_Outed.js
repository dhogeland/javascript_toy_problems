function outed(meet, boss){
  let x = 0,
      y = Object.keys(meet);
  for (var i = 0; i < y.length; i++) {
    x += meet[y[i]];
    if (y[i] == boss) {
      x += meet[y[i]];
    }
  }
  return x / y.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

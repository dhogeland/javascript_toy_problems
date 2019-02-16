var getQuote = function(quotes, hero){
  let x = hero[0] == 'B' ? 'Batman' : hero[0] == 'R' ? 'Robin' : 'Joker',
      y;
  for (var i = 0; i < quotes.length; i++) {
    if (hero.includes(i)) {
      y = i;
    }
  }
  return x + ': ' + quotes[y];
}

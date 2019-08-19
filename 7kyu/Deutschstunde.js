function derDieDas(wort){
  let x = 'aeiouäöü',
      y = wort.toLowerCase().split(''),
      z = 0;
  for (var i = 0; i < y.length; i++) {
    if (x.includes(y[i])) {
      z += 1;
    }
  }
  return z < 2 ? 'das ' + wort : z <= 3 ? 'die ' + wort : 'der ' + wort;
}

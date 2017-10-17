function goodVsEvil(good, evil){
  let theGood = 0, theEvil = 0,
  goodArray = good.slice().split(' '),
  evilArray = evil.slice().split(' ');
  for (var i = 0; i < goodArray.length; i++) {
    if (i == 0) {
      theGood += 1 * goodArray[i];
    } if (i == 1) {
      theGood += 2 * goodArray[i];
    } if (i == 2 || i == 3) {
      theGood += 3 * goodArray[i];
    } if (i == 4) {
      theGood += 4 * goodArray[i];
    } if ( i == 5) {
      theGood += 10 * goodArray[i];
    }
  }
  for (var j = 0; j < evilArray.length; j++) {
    if (j == 0) {
      theEvil += 1 * evilArray[j];
    } if (j == 1 || j == 2 || j == 3) {
      theEvil += 2 * evilArray[j];
    } if (j == 4) {
      theEvil += 3 * evilArray[j];
    } if (j == 5) {
      theEvil += 5 * evilArray[j];
    } if (j == 6) {
      theEvil += 10 * evilArray[j];
    }
  }
  if (theGood == theEvil) {
    return 'Battle Result: No victor on this battle field';
  } if (theGood > theEvil) {
    return 'Battle Result: Good triumphs over Evil';
  } return 'Battle Result: Evil eradicates all trace of Good';
}

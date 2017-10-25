function scoreThrows(radiuses){
  let score = 0;
  for (var i = 0; i < radiuses.length; i++) {
    if (radiuses[i] < 5) {
      score += 10;
    } if (radiuses[i] >= 5 && radiuses[i] <= 10) {
      score += 5;
    }
  }
  if (score === (radiuses.length * 10) && radiuses.length > 0) {
    score += 100;
  }
  return score;
}

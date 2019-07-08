function golfScoreCalculator(parList, scoreList){
  let score = 0;
  for (var i = 0; i < parList.length; i++) {
    score += +parList[i] < +scoreList[i] ? +scoreList[i] - +parList[i] : -(+parList[i] - +scoreList[i])
  }
  return score;
}

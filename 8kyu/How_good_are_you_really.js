function betterThanAverage(classPoints, yourPoints) {
  let total = classPoints.reduce((a,b) => a + b) + yourPoints,
      avg = total / (classPoints.length + 1);
      return yourPoints > avg;
}

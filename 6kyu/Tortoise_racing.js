function race(v1, v2, g) {
  if (v1 > v2) {
    return null;
  }
  let distance = v2 - v1;
  let distanceTime = g / distance;
  let totalTime = parseInt(3600 * distanceTime);
  let hours = parseInt(totalTime / 3600);
  let minutes = parseInt((totalTime - (hours * 3600)) / 60);
  let seconds = totalTime % 60;
  return [hours, minutes, seconds];
}

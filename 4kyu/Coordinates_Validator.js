function isValidCoordinates(coordinates){
  let split = coordinates.split(',');
  if (coordinates.match(/[a-z]/gi) ||
      coordinates.split('.').length > 3 ||
      split.length > 2 ||
      +split[0] > 90 ||
      +split[0] < -90 ||
      +split[1] > 180 ||
      +split[1] < -180 ||
      split[1].includes('- ') ||
      split[1].lastIndexOf('-') > 1) {
    return false;
  }
  return true;
}

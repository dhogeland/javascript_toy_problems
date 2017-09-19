function isValidIP(str) {
  if (str.split('.').length !== 4 || str.includes(' ')) {
    return false;
  }
  let split = str.split('.');
  for (var i = 0; i < split.length; i++) {
    if (+split[i] >= 0 && +split[i] <= 255) {
    } else {
      return false;
    }
  }
  return true;
}

function validatePIN (pin) {
  if (pin.match(/\d{4}/g) == pin || pin.match(/\d{6}/g) == pin) { return true};
  return false;
}

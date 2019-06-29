function isValid(idn) {
  return /^[a-z_$]/i.test(idn) && idn.split('').every(x => /[a-z0-9_$]/i.test(x));
}

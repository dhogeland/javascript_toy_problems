String.prototype.digit = function() {
  let reg = RegExp('[0-9]')
  return this.length == 1 && reg.test(this);
};

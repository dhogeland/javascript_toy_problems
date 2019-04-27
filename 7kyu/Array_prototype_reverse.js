Array.prototype.reverse = function() {
  for (var i = 0; i < Math.floor(this.length / 2); i++) {
    let x = this[i],
        y = this[(this.length - 1) -i];
    this[i] = y;
    this[(this.length - 1) - i] = x;
  }
  return this;
};

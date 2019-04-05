Array.prototype.sum = function() {
  let x = 0;
  for (var i = 0; i < this.length; i++) {
    x += this[i];
  }
  return x;
}

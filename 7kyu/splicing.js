Array.prototype.removeValue = function(thing) {
  let x = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] !== thing) {
      x.push(this[i]);
    }
  }
  return this.includes(thing) ? x : false;
}

Array.prototype.numberOfOccurrences = function(x) {
  let total = 0;
  for (var i = 0; i < this.length; i++) {
    if (x == this[i]) total++
  }
  return total;
}

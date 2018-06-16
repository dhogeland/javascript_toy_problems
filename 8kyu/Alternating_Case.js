String.prototype.toAlternatingCase = function () {
  let split = this.split('');
  for (var i = 0; i < split.length; i++) {
    if (split[i] == split[i].toLowerCase()) {
      split[i] = split[i].toUpperCase();
    } else {
      split[i] = split[i].toLowerCase();
    }
  }
  return split.join('');
}

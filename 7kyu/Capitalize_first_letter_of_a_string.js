String.prototype.capitalize = function() {
  let x = this.split('');
  x[0] = this.charCodeAt(0) >= 97 && this.charCodeAt(0) <= 122 ? String.fromCharCode(this.charCodeAt(0) - 32) : x[0];
  return x.join('');
}

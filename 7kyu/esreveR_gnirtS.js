//Create reverse function for the String prototype
String.prototype.reverse = function() {
  let x = this;
  x = x.split(' ').reverse();
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i].split('').reverse().join('');
  }
  return x.join(' ');
}

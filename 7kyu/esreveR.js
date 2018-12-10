reverse = function(array) {
  let x = [];
  for (var i = 0; i < array.length; i++) {
    x.unshift(array[i]);
  }
  return x;
}

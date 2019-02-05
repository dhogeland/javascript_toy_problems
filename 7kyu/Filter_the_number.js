var FilterString = function(value) {
  let x = '';
  for (var i = 0; i < value.length; i++) {
    if (value.charCodeAt(i) <= 59) {
      x += value[i];
    }
  }
  return +x;
}

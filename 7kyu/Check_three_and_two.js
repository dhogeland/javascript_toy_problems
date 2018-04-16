function checkThreeAndTwo(array) {
  let x = [], y = [];
  for (var i = 0; i < array.length; i++) {
    if (x.length == 0 || x.includes(array[i])) {
      x.push(array[i]);
    } else if (y.length == 0 || y.includes(array[i])) {
      y.push(array[i]);
    } else {
    return false;
    };
  }
  return ((x.length == 3 || y.length == 3) && (x.length == 2 || y.length == 2));
}

function doubleChar(str) {
  let split = str.split(''), arr = [];
  for (var i = 0; i < split.length; i++) {
    arr.push(split[i], split[i]);
  }
  return arr.join('');
}

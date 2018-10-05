function onlyOne() {
  let x = [];
  for (var i = 0; i < arguments.length; i++) {
    x.push(arguments[i]);
  }
  return x.includes(true) && x.indexOf(true) == x.lastIndexOf(true);
}

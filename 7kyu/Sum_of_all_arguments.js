function sum() {
  let x = [];
      i = 0;
  while (arguments[i]) {
    x.push(arguments[i]);
    i++;
  }
  return x.length > 1 ? x.reduce((a,b) => a + b) : x.length == 1 ? x[0] : 0;
}

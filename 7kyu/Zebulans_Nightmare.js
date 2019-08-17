function zebulansNightmare(functionName) {
  let x = functionName.split('_');
  for (var i = 1; i < x.length; i++) {
    x[i] = x[i].split('');
    x[i][0] = x[i][0].toUpperCase();
    x[i] = x[i].join('');
  }
  return x.join('');
}

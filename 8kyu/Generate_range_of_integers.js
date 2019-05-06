function generateRange(min, max, step){
  let x = [];
  for (var i = min; i <= max; i += step) {
    x.push(i);
  }
  return x;
}

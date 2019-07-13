function well(x){
  let y = 0;
  for (var i = 0; i < x.length; i++) {
    y += x[i] === 'good' ? 1 : 0;
  }
  return y === 0 ? 'Fail!' : y <= 2 ? 'Publish!' : 'I smell a series!';
}

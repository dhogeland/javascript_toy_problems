function catMouse(x, j){
  var str = x.indexOf('m') > x.indexOf('C') ? x.substring(x.indexOf('m') + 1, x.indexOf('C') + 1) : x.substring(x.indexOf('C') + 1, x.indexOf('m') + 1);
  return !x.includes('D') || !x.includes('C') || !x.includes('m') ? 'boring without all three' : str.length > j ? 'Escaped!' : str.includes('D') ? 'Protected!' : 'Caught!';
}

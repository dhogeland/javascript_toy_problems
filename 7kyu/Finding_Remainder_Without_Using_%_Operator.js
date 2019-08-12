var remainder = function(D,d){
  let x = ((D / d) + '').split('.');
  x = x.length > 1 ? +('.' + x[1]) : x[0];
  return !d ? 'NaN' : x < 1 ? Math.round(x * d) : 0;
}

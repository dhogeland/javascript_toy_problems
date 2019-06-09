function findMissingNumber(sequence){
  let x = sequence.split(' '),
      y = [],
      min = 1,
      max = Math.max(...x);
  for (var i = min; i <= max; i++) {
    y.push(i + '');
  }
  for (var i = min; i < y.length; i++) {
    if (!x.includes(y[i])) {
      return +y[i];
    } if (!y.includes(x[i])) {
      return 1;
    }
  }
  return sequence && !max ? 1 : 0;
}

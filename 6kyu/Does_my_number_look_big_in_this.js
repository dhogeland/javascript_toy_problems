function narcissistic( value ) {
  let numSplit = value.toString().split('');
  let answer = 0;
  for (var i = 0; i < numSplit.length; i++) {
    answer += Math.pow(+numSplit[i], numSplit.length);
  }
  return answer === value
}

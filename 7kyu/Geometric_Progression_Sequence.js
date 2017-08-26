function geometricSequenceElements(a, r, n){
  var sequence = a;
  while(n > 1) {
    sequence += ", " + (a *= r);
    n--;
  }
  return sequence;
}

function nearestSq(n){
  if (Math.sqrt(n) == Math.ceil(Math.sqrt(n))) {
    return n;
  }
  return ((Math.floor(Math.sqrt(n))* Math.floor(Math.sqrt(n)) - n) > (n - (Math.ceil(Math.sqrt(n)) * Math.ceil(Math.sqrt(n)))) ? (Math.floor(Math.sqrt(n))* Math.floor(Math.sqrt(n))) : (Math.ceil(Math.sqrt(n))* Math.ceil(Math.sqrt(n))));
}

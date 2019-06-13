function numberProperty(n){
  return [ (function(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num >= 1;
  })(n),
  n % 2 === 0,
  n % 10 === 0];
};

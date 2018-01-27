function solve(s){
  let total = 0;
  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length; j++) {
      if (+s[j] % 2 != 0) {
        total++;
      }
    }
  }
  return total;
};

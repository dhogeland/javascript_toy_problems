function solution(number){
  let threes = 0,
      fives = 0,
      both = 0;
  for (var i = 1; i < number; i++) {
    if (i % 15 === 0) {
      ++both;
    } else if (i % 3 === 0) {
      ++threes;
    }  else if ( i % 5 === 0) {
      ++fives;
    }
  }
  return [threes, fives, both];
}  

function GetSum( a,b ) {
  let answer = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
     for (var i = a; i <= b; i++) {
       answer += i;
     }
   } else {
     for (var i = b; i <= a; i++) {
       answer += i;
     }
  }
  return answer;
}

function solve(s){
  let a = 0, b = 0, c = 0, d = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      a++;
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      b++;
    } else if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      c++;
    } else {
      d++;
    }
  }
  return [a, b, c, d];
}

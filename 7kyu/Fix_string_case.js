function solve(s){
    let x = s.length,y = 0,z = 0;
  for (var i = 0; i < x; i++) {
    if (s[i] == s[i].toLowerCase()) {
      y++;
    } else {
      z++;
    }
  }
  return (y == z || y > z) ? s.toLowerCase() : s.toUpperCase();
}

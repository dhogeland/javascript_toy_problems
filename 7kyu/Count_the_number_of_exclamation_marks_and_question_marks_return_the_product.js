function product(s){
  return s.includes('!') && s.includes('?') ? s.split('').filter(x => x == '!').length * s.split('').filter(y => y == '?').length : 0;
}

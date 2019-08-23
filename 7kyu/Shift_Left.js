function shiftLeft(s, t){
  let count = 0;
  while (s != t){
    s.length > t.length ? s = s.slice(1) : t = t.slice(1);
    count++
  }
  return count
}

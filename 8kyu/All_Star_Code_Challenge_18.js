function strCount(str, letter){
  let x = 0;
  str.split('').forEach(elem => elem == letter ? x++: '')
  return x;
}

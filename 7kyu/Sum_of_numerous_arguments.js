function findSum(){
  let x = 0;
  for (var i = 0; i < arguments.length; i++) {
  if (arguments[i] < 0) return -1;
    x += arguments[i];
  }
  return x;
}

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let x = 0;
  for (var i = 0; i < arguments.length; i++) {
    x += arguments[i] * arguments[i];
  }
  return Math.floor(Math.sqrt(x) / 2);
}

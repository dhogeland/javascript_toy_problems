function numberToPower(number, power){
  let x = number;
  for (var i = 1; i < power; i++) {
    x *= number;
  }
  return number && power ? x : number ? 1 : 0;
}

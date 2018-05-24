function divisibleByThree(str){
  let x = 0;
  for (var i = 0; i < str.length; i++) {
    x += +str[i];
  }
  return x % 3 == 0;
}

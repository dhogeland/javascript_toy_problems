function stringCounter(inputS, charS){
  let x = 0;
  for (var i = 0; i < inputS.length; i++) {
    if (inputS[i] === charS) x++;
  }
  return x;
}

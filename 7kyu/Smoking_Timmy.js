function startSmoking(bars,boxes){
  let x = 0, y, z;
  x += (bars * 180) + (boxes * 18);
  if (x > 5) {
    y = x;
    while (y > 4) {
      x += Math.floor(y / 5);
      z = y % 5;
      y = Math.floor(y / 5) + z;
    }
  }
  return x;
}

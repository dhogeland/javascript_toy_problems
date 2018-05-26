var countSheep = function (num){
  let x = 1, y = '';
  while (x <= num) {
    y += x + ' sheep...';
    x++;
  }
  return y;
}

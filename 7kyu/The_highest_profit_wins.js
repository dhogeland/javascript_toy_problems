function minMax(arr){
  let high = 0,
      low = arr[0];
  arr.map(a => {
    if (a > high) {
      high = a;
    } if (a < low) {
      low = a;
    }
  })
  return [low,high];
}

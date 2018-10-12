function differenceInAges(ages){
  let x = Math.max(...ages),
      y = Math.min(...ages);
  return [y,x,(x - y)];
}

function elapsedSeconds(startDate, endDate){
  let x = startDate.getTime(),
      y = endDate.getTime();
  return Math.abs(y - x) / 1000;
}

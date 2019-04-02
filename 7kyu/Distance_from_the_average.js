function distancesFromAverage(arr){
  let x = arr.reduce((a,b) => a + b) / arr.length;
  return arr.map(index => +(x - index).toFixed(2));
}

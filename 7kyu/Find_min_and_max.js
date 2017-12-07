function getMinMax(arr){
  arr.sort((a,b) => a - b);
  return [arr[0], arr[arr.length - 1]];
};

function solve(arr){
  let x = [],
      y = arr.length;
  while (x.length < y) {
    if (x.length < y) {
      x.push(Math.max(...arr));
      arr.splice(arr.indexOf(Math.max(...arr)), 1);
    }
    if (x.length < y) {
      x.push(Math.min(...arr));
      arr.splice(arr.indexOf(Math.min(...arr)), 1);
    }
  }
  return x;
};

function solve(a){
  let count = 0;
  a.map(x => {
    if (typeof x == 'number') {
      if (x % 2 == 0) {
        count++;
      } else {
        count--;
      }
    }
  })
  return count;
};

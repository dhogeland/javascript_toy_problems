function isOddHeavy(n){
  let even = [],
      odd  = [];
  for (var i = 0; i < n.length; i++) {
    (n[i] % 2 === 0) ? even.push(n[i]) : odd.push(n[i]);
  }
  if (even.length === 0 && odd.length > 0) {
    return true;
  }
  even = even.sort((a,b) => {
    if (a < b) {
      return 1;
    } return -1;
  });
  odd = odd.sort((a,b) => {
    if (a < b) {
      return -1;
    } return 1;
  });
  return odd[0] > even[0];
}

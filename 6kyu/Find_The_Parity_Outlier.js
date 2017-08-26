function findOutlier(integers){
  var even = [],
      odd = [];
  for (var i = 0; i < integers.length; i++) {
    if(integers[i] % 2 == 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
  }
  return even.length < odd.length ? even[0] : odd[0];
}

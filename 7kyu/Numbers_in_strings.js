function solve(s){
  let x = s.split(''), arr = [], hold = '';
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) <= 57) {
    hold += x[i];
    if (i == s.length - 1) {
      arr.push(hold);
    }
  } else {
    arr.push(hold);
    hold = '';
  }
}
  let high = 0;
  for (var j = 0; j < arr.length; j++) {
    if (+arr[j] > high) {
      high = +arr[j];
    }
  }
  return high;
};

function groupByCommas(n) {
  let str = n.toString().split(''), myArr = [];
  if (str.length <= 3) {
    return str.join('');
  }
  for (var i = str.length - 1; i >= 0; i--) {
    if (myArr.length % 3 == 0 && myArr.length != 0) {
      myArr.unshift(str[i] + ',');
    } else {
      myArr.unshift(str[i]);
    }
  }
  return myArr.join('');
}

function towerBuilder(nFloors) {
  let arr = [];
  for (var i = 1; i <= nFloors; i++) {
    let str = '*'.repeat((i * 2) - 1), arr2 = [str];
    while ((str.length + arr2.length) < ((nFloors * 2) -1)) {
      arr2.push(' ');
      arr2.unshift(' ');
    }
    arr2.join('')
    arr.push(arr2.join(''));
  }
  return arr;
}

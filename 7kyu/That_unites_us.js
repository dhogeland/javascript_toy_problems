function thatUnitesUs(array1, array2, n) {
  let mySet = array1;
  for (var i = 0; i < array2.length; i++) {
    if (!mySet.includes(array2[i])) {
      mySet = mySet.concat(array2[i]);
    }
  }
  return mySet.sort().slice(0, n);
}

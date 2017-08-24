function countSheeps(arrayOfSheep) {
  let count = 0;
  for (var i = 0, x = arrayOfSheep.length; i < x; i++) {
    if (arrayOfSheep[i]) {
      count++;
    }
  } return count;
}

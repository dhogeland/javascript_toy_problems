function countFeelings(string, array) {
  let total = 0;
  for (var i = 0; i < array.length; i++) {
    let split = array[i].split('');
    for (var j = 0; j < split.length; j++) {
      if (string.includes(split[j])) {
        if (j == split.length - 1) {
          total++
        }
      } else {
        break;
      }
    }
  }
  if (total > 0 && total < 2) {
    return total + ' feeling.';
  } else {
    return total + ' feelings.';
  }
}

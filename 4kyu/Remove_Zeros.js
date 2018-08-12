function removeZeros(array) {
  var i = 0, j, k = i, x, y = 0;

  function zero() {
    if (array[i] == 0 || array[i] == '0') {
      j = i + 1;
      k = i;
      x = array[i];
      while (array[j] >= 0 || array[j] == '0' || array[j]) {
        array[i] = array[j];
        array[j] = x;
        i++;
        j++;
      }
      i = k;
    }
  }

  while (array[i] >= 0 || array[i]) {
    while (y < 12) {
      zero();
      y++;
    }
    y = 0;
    i++;
  }

  return array;
}

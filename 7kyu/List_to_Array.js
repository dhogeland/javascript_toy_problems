function listToArray(list) {
  let x = [],
      y = {},
      z = Object.assign(y, list);
  while (true) {
    x.push(y.value);
    if (y.next !== null) {
      y = Object.values(y)[1];
    } else {
      break;
    }
  }
  return x;
}

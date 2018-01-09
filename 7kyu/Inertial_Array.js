function isInertial(arr) {
  if (Math.max(...arr) % 2 == 0) {
    arr.splice(arr.indexOf(Math.max(...arr)), 1);
  } else {
    return false;
  }
  if (Math.max(...arr) % 2 == 0) {
    return false;
  }
  let odd = [], even = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  if (odd.length == 0) {
    return false;
  }
  if (Math.min(...odd) > Math.max(...even) || even.length == 0) {
  return true;
  }
  return false;
}

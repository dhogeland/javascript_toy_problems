function span(arr, predicate) {
  let x = [];
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      x.push(arr[i])
    } else {
      break;
    }
  }
  return [x, arr.slice(x.length)];
}

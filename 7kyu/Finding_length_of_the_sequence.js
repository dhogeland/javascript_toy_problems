var lengthOfSequence = function (arr, n) {
  let x = arr.indexOf(n);
  for (var i = x + 1; i < arr.length; i++) {
    if (arr[i] === n) break;
  }
  return i === arr.lastIndexOf(n) ? (i - x) + 1 : 0;
};

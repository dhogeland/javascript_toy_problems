function findDeletedNumber(arr, mixArr) {
  arr = arr.sort();
  mixArr = mixArr.sort();
  for (var i = 0; i < mixArr.length; i++) {
    if (arr[i] !== mixArr[i]) {
      return arr[i];
    }
  }
  return arr.length > mixArr.length ? arr[i]: 0;
}

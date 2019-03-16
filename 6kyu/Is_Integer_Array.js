function isIntArray(arr) {
  if (!arr) return false;
  for (var i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) || typeof arr[i] !== 'number' || arr[i] !== Math.floor(arr[i])) return false;
  }
  return true;
}

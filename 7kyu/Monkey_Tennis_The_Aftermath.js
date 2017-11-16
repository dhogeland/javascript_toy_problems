function ballCollector(detritus) {
  let obj = {weight: 0};
  for (var i = 0; i < detritus.length; i++) {
    if (detritus[i] == 58) {
      obj.weight += 58;
    }
  }
  return obj;
}

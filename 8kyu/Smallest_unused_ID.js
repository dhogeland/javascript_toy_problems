function nextId(ids){
  let max = Math.max(...ids),
      min = Math.min(...ids);
  for (var i = min; i <= max; i++) {
    if (!ids.includes(i)) {
      break;
    }
  }
  return min > 0 ? 0 : i;
}

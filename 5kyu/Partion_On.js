// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  let x = items.length;
  for (var i = 0; i < x; i++) {
    if (pred(items[i])) {
      let y = items.splice(i,1)[0];
      items.push(y);
      x--;
      i--;
    }
  }
  return x;
}

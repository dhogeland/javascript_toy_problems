function mostFrequentItemCount(collection) {
  let x = 0,
      y = 0;
  for (var i = 0; i < collection.length; i++) {
    collection.forEach((index) => {
      if (collection[i] === index) {
        y += 1;
      }
    })
    if (y > x) {
      x = y;
    }
    y = 0;
  }
  return x;
}

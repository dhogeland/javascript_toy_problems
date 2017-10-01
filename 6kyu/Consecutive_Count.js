function getConsectiveItems(items, key){
  items += '';
  let count = 0, testing = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i] == key) {
      testing++;
      if (testing > count) {
        count = testing;
      }
    } else {
      testing = 0;
    }
  }
  return count
}

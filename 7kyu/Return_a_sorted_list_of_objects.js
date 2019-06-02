function sortList (sortBy, list) {
  return list.sort((a,b) => a[sortBy] < b[sortBy]);
}

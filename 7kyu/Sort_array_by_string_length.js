function sortByLength (array) {
  let sorted = array.sort((a,b) => {
    return a.length - b.length;
  });
  return sorted;
};

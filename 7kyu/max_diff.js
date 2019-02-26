function maxDiff(list) {
  return list.length > 0 ? Math.max(...list) - Math.min(...list) : 0;
};

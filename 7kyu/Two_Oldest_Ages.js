function twoOldestAges(ages){
  let sorted = ages.sort((a,b) => {
    if (a < b) { return -1}
    if (a > b) { return 1}
    return 0;
  })
  return [sorted[sorted.length - 2], sorted[sorted.length - 1]]
}

function howManyGifts(maxBudget, gifts){
  let total = 0;
  while (maxBudget >= Math.min(...gifts)) {
    total += 1;
    maxBudget -= Math.min(...gifts);
    gifts.splice(gifts.indexOf(Math.min(...gifts)), 1);
  }
  return total;
}

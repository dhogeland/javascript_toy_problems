function removeRotten(bagOfFruits){
  if (!bagOfFruits || bagOfFruits.length == 0) return [];
  for (var i = 0; i < bagOfFruits.length; i++) {
    if (bagOfFruits[i].includes('rotten')) {
      bagOfFruits[i] = bagOfFruits[i].split('rotten').join('').toLowerCase();
    }
  }
  return bagOfFruits;
}

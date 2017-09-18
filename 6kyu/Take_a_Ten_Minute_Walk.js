function isValidWalk(walk) {
  let count = 0;
  for (var i = 0; i < walk.length; i++) {
    if (walk[i] === 'n' || walk[i] === 'w') {
      count++;
    } else {
      count--;
    }
  }
  return (count === 0 && walk.length === 10);
}

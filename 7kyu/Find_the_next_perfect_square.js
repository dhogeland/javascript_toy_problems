function findNextSquare(sq) {
  if (Math.sqrt(sq) === Math.floor(Math.sqrt(sq))) {
    return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
  }
  return -1;
}

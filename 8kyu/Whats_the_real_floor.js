function getRealFloor(n) {
  return n <= 0 ? n : n <= 12 ? n - 1 : n - 2;
}

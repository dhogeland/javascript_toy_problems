function pillars(num_pill, dist, width) {
  return num_pill > 1 ? (((num_pill - 1) * dist) * 100) + (num_pill * width) - (width * 2) : 0;
}

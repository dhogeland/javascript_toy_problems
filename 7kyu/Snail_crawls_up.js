function snail(column, day, night) {
  let x = 0, y = 0;
  while (y < column) {
    y += day;
    x++;
    if (y >= column) return x;
    y -= night;
  }
  return x;
}

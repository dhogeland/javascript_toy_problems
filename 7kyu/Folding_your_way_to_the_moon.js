function foldTo(distance) {
  let paper = 0.0001, num = 0;;
  while (paper <= distance) {
    paper *= 2;
    num++;
  }
  return distance <= 0 ? null : num;
}

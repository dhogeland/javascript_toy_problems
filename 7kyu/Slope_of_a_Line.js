function getSlope(p1, p2) {
  let x = p2[0] - p1[0],
      y = p2[1] - p1[1];
  return p1 === p2 || p1[0] === p2[0] ? null : y / x;
}

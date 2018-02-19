var circleArea = function(radius) {
  if (typeof radius == 'string' || radius <= 0) {
    return false;
  }
  return +(radius * radius * Math.PI).toFixed(2);
};

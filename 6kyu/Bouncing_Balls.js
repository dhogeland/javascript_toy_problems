function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || (bounce <= 0 || bounce >= 1) || window >= h) return -1;
  let x = 1;
  while (h > window) {
    h *= bounce;
    x += 2;
  }
  return x - 2;
}

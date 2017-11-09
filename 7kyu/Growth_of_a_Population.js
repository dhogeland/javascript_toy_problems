function nbYear(p0, percent, aug, p) {
  let per, years = 0;
  if (percent != null) {
    per = (percent * .01);
  } else {
    per = 0;
  }
  while (p0 < p) {
    p0 += (p0 * per) + aug;
    years++;
  }
  return years;
}

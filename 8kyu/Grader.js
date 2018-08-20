function grader(score) {
  if (score > 1 || score < .6) return 'F';
  if (score >= .9) return 'A';
  if (score >= .8) return 'B';
  if (score >= .7) return 'C';
  return 'D'
}

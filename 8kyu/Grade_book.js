function getGrade (s1, s2, s3) {
  let x = (s1 + s2 + s3) / 3;
  if (x >= 90) return 'A';
  if (x >= 80) return 'B';
  if (x >= 70) return 'C';
  if (x >= 60) return 'D';
  return 'F';
}

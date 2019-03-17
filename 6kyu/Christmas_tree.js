function christmasTree(height) {
  let x = [];
  for (var i = 0; i < height; i++) {
    x.push(' '.repeat(height - (1 + i)) + '*'.repeat((i * 2) + 1) + ' '.repeat(height - (1 + i)));
  }
  return height ? x.join('\n'): '';
}

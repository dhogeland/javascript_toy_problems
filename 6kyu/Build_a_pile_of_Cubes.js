function findNb(m) {
    let total = 0, i = 0;
    while (total < m) {
      i++;
      total += Math.pow(i, 3);
    }
    if (total === m) {
      return i;
    }
    return (-1);
}

function dontGiveMeFive(start, end)
{
  let count = 0, x = start;
  while (x <= end) {
    if (!x.toString().includes(5)) {
      count++;
    }
    x++;
  }
  return count;
}

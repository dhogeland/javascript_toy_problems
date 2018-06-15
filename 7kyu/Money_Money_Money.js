function calculateYears(principal, interest, tax, desired) {
  let y = 0;
  while (principal < desired) {
    let x = (principal * interest) - ((principal * interest) * tax);
    principal += x;
    y++;
  }
  return y;
}

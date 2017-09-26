function queueTime(customers, n) {
  let tills = [];
  for (var i = 0; i < n; i++) {
    tills.push(0);
  }
  while (customers.length > 0) {
    let customer = customers.shift();
    tills[0] += customer;
    tills.sort((a, b) => a - b)
  }
  return tills[tills.length - 1];
}

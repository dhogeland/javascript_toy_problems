function shoppingListCost(arr) {
  let total = 0, cost, discount, quantity;
  for (var i = 0; i < arr.length; i++) {
    quantity = arr[i][1];
    if (groceries[arr[i][0]].bogof) {
      quantity = Math.ceil((quantity / 2))
    }
    cost = groceries[arr[i][0]].price * quantity;
    discount = (cost * groceries[arr[i][0]].discount) / 100;
    total += cost - discount;
  }
  return +total.toPrecision(5);
}

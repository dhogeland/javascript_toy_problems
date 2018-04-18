function toCurrency(price){
  price = (price + '').split('');
  let arr = [];
  while (price.length > 0) {
  if (price.length == 2) {
    arr.unshift(price[0] + price[1]);
    price = 0;
  } else {
    arr.unshift(price.splice(price.length - 3, 3))
    arr[0] = arr[0].join('');
    }
  }
  return arr.join(',');
}

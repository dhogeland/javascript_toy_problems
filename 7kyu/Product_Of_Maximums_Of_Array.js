function maxProduct(numbers, size){
  let x = [];
  while (x.length < size) {
    x.push(Math.max(...numbers));
    numbers.splice(numbers.indexOf(Math.max(...numbers)),1);
  }
  return x.reduce((a,b) => a * b);
}

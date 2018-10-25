function divisibleBy(numbers, divisor){
  let x = [];
  numbers.forEach(function(index) {
    if (index % divisor == 0) x.push(index);
  });
  return x;
}

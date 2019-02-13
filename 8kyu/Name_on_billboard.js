function billboard(name, price = 30){
  let x = 0;
  for (var i = 0; i < name.length; i++) {
    x += price;
  }
  return x;
} 

function abbrevName(name){
  let x = name.split(' ');
  return x[0][0].toUpperCase() + '.' + x[1][0].toUpperCase();
}

function toAcronym( input ){
  let x = '';
  input = input.split(' ');
  for (var i = 0; i < input.length; i++) {
    x += input[i][0].toUpperCase();
  }
  return x;
}

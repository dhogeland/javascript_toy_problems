function jumpingNumber(n){
  let x = (n + '').split('');
  for (var i = 0; i < x.length - 1; i++) {
    if (+x[i] + 1 == +x[i + 1]) {
    } else if (+x[i] - 1 == +x[i + 1]) {
    } else {
      return "Not!!";
    }
  }
  return "Jumping!!";
}

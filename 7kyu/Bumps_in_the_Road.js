function bump(x){
  return (x.split('_').join('').length > 15) ? "Car Dead" : "Woohoo!";
}

function squareDigits(num){
  return +(String(num).split('').map(x =>{return x*x}).join(''))
}
